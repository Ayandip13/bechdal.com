/**
 * Authentication Service (Mock API Layer)
 * 
 * Modular service layer for handling login, registration, password recovery,
 * and OTP verification. Prepared for future backend REST API integration.
 */

export const authService = {
  /**
   * Log in user with email/mobile and password
   */
  async login({ emailOrMobile, password, rememberMe = false }) {
    // Simulate API network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Simple mock validation logic
    if (!emailOrMobile || !password) {
      throw new Error("Please fill in all required fields.");
    }

    const isEmail = emailOrMobile.includes("@");
    
    // Mock user object
    const user = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      name: isEmail ? emailOrMobile.split("@")[0] : "BechDal User",
      email: isEmail ? emailOrMobile : "user@bechdal.com",
      mobile: !isEmail ? emailOrMobile : "+91 98765 43210",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      joinedDate: new Date().toISOString(),
    };

    if (rememberMe && typeof window !== "undefined") {
      localStorage.setItem("bechdal_remember_user", JSON.stringify({ emailOrMobile }));
    }

    return {
      success: true,
      user,
      token: "mock_jwt_token_" + Date.now(),
    };
  },

  /**
   * Register new user account
   */
  async register({ fullName, email, mobile, password }) {
    await new Promise((resolve) => setTimeout(resolve, 700));

    if (!fullName || !email || !mobile || !password) {
      throw new Error("All fields are required for registration.");
    }

    const user = {
      id: "usr_" + Math.random().toString(36).substring(2, 9),
      name: fullName,
      email,
      mobile,
      joinedDate: new Date().toISOString(),
    };

    return {
      success: true,
      user,
      requiresVerification: true,
      message: "Account created successfully. Please verify your OTP.",
    };
  },

  /**
   * Request password reset code
   */
  async forgotPassword({ emailOrMobile }) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (!emailOrMobile) {
      throw new Error("Please enter your registered email or mobile number.");
    }

    return {
      success: true,
      target: emailOrMobile,
      message: `Verification code sent to ${emailOrMobile}`,
    };
  },

  /**
   * Verify 6-digit OTP code
   */
  async verifyOtp({ code, target }) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!code || code.length !== 6) {
      throw new Error("Please enter a valid 6-digit verification code.");
    }

    // Mock verification: Any 6 digits work, but 000000 can test failure
    if (code === "000000") {
      throw new Error("Invalid verification code. Please try again.");
    }

    return {
      success: true,
      verified: true,
      message: "Verification successful!",
    };
  },

  /**
   * Reset password with new password
   */
  async resetPassword({ newPassword, confirmPassword }) {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!newPassword || newPassword.length < 8) {
      throw new Error("Password must be at least 8 characters long.");
    }

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    return {
      success: true,
      message: "Your password has been updated successfully.",
    };
  },

  /**
   * Social login placeholder (e.g. Google)
   */
  async loginWithGoogle() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      user: {
        id: "usr_google_101",
        name: "Google User",
        email: "google.user@gmail.com",
        mobile: "+91 99887 76655",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
      },
      token: "mock_google_token",
    };
  },
};
