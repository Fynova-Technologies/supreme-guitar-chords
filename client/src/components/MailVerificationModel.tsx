// Email verification Model
import React from "react";
import mail from "../../assets/email.svg";
import { MailVerificationModelProps } from '@/types'

export default function MailVerificationModel({
  title = "Welcome",
  message = "",
  buttonText,
  buttonAction,
  extraButtons = [],
  onClose,
}: MailVerificationModelProps) {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        {onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>

      {/* Image */}
      <div className="flex items-center justify-center mb-6">
        <img src={mail} alt="mail picture" className="w-24 h-24" />
      </div>

      {/* Message */}
      <p className="mb-6 text-gray-700 dark:text-gray-300">{message}</p>

      {/* Main Button */}
      {buttonText && buttonAction && (
        <button
          onClick={buttonAction}
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 mb-4"
        >
          {buttonText}
        </button>
      )}

      {/* Extra Buttons */}
      {extraButtons.length > 0 && (
        <div className="flex justify-center gap-3 flex-wrap">
          {extraButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.action}
              className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200"
            >
              {btn.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
