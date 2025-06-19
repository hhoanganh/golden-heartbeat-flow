import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-warm-gray flex items-center justify-center px-3">
      <div className="max-w-md w-full">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-supportive-blue hover:text-compassion-red transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-heading-1 font-bold text-compassion-red flex items-center justify-center">
            {/* The 'G' div has been replaced with the SVG logo */}
            <svg
              className="w-12 h-12 mr-3"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z"
                transform="rotate(180 192 256)"
                fill="#E23E57"
                stroke="#FFD700"
                strokeWidth="25"
              />
            </svg>
            Giọt Máu Vàng
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-md-custom shadow-md-custom p-8">
          {/* Toggle Buttons */}
          <div className="flex mb-6 bg-warm-gray rounded-md-custom p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md-custom text-body font-medium transition-all duration-300 ${
                isLogin 
                  ? 'bg-white text-deep-gray shadow-sm' 
                  : 'text-gentle-gray hover:text-deep-gray'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md-custom text-body font-medium transition-all duration-300 ${
                !isLogin 
                  ? 'bg-white text-deep-gray shadow-sm' 
                  : 'text-gentle-gray hover:text-deep-gray'
              }`}
            >
              Register
            </button>
          </div>

          {/* Form Container */}
          <div className="relative" style={{ minHeight: '350px' }}>
            {/* Login Form */}
            <div 
              className={`absolute w-full transition-all duration-300 ease-in-out ${
                isLogin ? 'opacity-100' : 'opacity-0 -translate-x-4'
              }`}
            >
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login_email" className="text-deep-gray">Email</Label>
                  <Input id="login_email" type="email" placeholder="Enter your email" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login_password" className="text-deep-gray">Password</Label>
                  <Input id="login_password" type="password" placeholder="Enter your password" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <div className="text-right">
                  <a href="#" className="text-supportive-blue hover:text-compassion-red transition-colors text-body">
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" className="w-full bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom py-3 text-body font-medium transition-all duration-300 hover:scale-105">
                  Sign In
                </Button>
              </form>
            </div>
            
            {/* Register Form */}
            <div 
              className={`absolute w-full transition-all duration-300 ease-in-out ${
                !isLogin ? 'opacity-100' : 'opacity-0 translate-x-4'
              }`}
            >
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-deep-gray">Full Name</Label>
                  <Input id="fullName" type="text" placeholder="Enter your full name" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register_email" className="text-deep-gray">Email</Label>
                  <Input id="register_email" type="email" placeholder="Enter your email" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register_password" className="text-deep-gray">Password</Label>
                  <Input id="register_password" type="password" placeholder="Enter your password" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-deep-gray">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue" />
                </div>
                <Button type="submit" className="w-full bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom py-3 text-body font-medium transition-all duration-300 hover:scale-105">
                  Create Account
                </Button>
              </form>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <p className="text-gentle-gray text-body">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-supportive-blue hover:text-compassion-red transition-colors font-medium"
              >
                {isLogin ? 'Register here' : 'Login here'}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8 text-gentle-gray text-caption">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
