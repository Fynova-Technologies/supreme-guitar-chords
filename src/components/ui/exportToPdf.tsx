import { jsPDF }from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "sonner";

/**
 * Exports a given HTML element to a styled PDF.
 * @param elementRef - The React ref pointing to the DOM element
 * @param songTitle - The title of the song
 * @param artistName - The artist name
 * @param transposition - The current transposition value
 */
export async function exportToPDF(
  elementRef: React.RefObject<HTMLElement>,
  songTitle: string,
  artistName: string,
  transposition: number
): Promise<void> {
  if (!elementRef.current) {
    toast.error("Unable to generate PDF. Please try again.");
    return;
  }

  try {
    const element = elementRef.current;

    const clonedElement = element.cloneNode(true) as HTMLElement;
    clonedElement.style.position = "absolute";
    clonedElement.style.left = "-9999px";
    clonedElement.style.top = "0";
    clonedElement.style.width = element.offsetWidth + "px";
    clonedElement.style.height = "auto";
    clonedElement.style.maxHeight = "none";
    clonedElement.style.overflow = "visible";
    clonedElement.style.backgroundColor = "white";
    clonedElement.style.color = "black";
    clonedElement.style.padding = "20px";

    const titleElement = document.createElement("div");
    titleElement.innerHTML = `
      <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 8px; color: black;">${songTitle}</h1>
      <p style="font-size: 18px; margin-bottom: 20px; color: #666;">by ${artistName}</p>
      ${
        transposition !== 0
          ? `<p style="font-size: 14px; margin-bottom: 15px; color: #888;">Transposed: ${
              transposition > 0 ? "+" : ""
            }${transposition}</p>`
          : ""
      }
    `;
    clonedElement.insertBefore(titleElement, clonedElement.firstChild);

    document.body.appendChild(clonedElement);

    const canvas = await html2canvas(clonedElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      width: clonedElement.scrollWidth,
      height: clonedElement.scrollHeight,
    });

    document.body.removeChild(clonedElement);

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    const ratio = Math.min(
      pdfWidth / (imgWidth * 0.264583),
      pdfHeight / (imgHeight * 0.264583)
    );
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;

    const x = (pdfWidth - finalWidth) / 2;
    const y = (pdfHeight - finalHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);

    const fileName = `${songTitle.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_chords.pdf`;
    pdf.save(fileName);

    toast.success("PDF generated successfully!");
  } catch (error) {
    console.error("Error generating PDF:", error);
    toast.error("Failed to generate PDF. Please try again.");
  }
}
