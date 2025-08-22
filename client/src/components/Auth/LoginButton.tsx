// Triggers Auth0 login
import { useAuth0 } from "@auth0/auth0-react"

export function LoginButton () {
    const {isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <>
            { isAuthenticated ? (
                    <button
                        className="flex items-center"
                        onClick={() => {
                            logout({
                                logoutParams: {
                                    returnTo: window.location.origin,
                                }
                            })
                        }}
                    >
                        <i className="fas fa-sign-out-alt mr-3"></i>
                        <span>logout</span>
                    </button>
                ) : (
                    <button
                        className="flex items-center"
                        onClick={() => loginWithRedirect({
                            authorizationParams: { prompt: 'login' },
                        })}
                    >
                        <i className="fas fa-sign-in-alt mr-3"></i>
                        <span>Log in</span>
                    </button>
                )
            }
        </>
    )
}