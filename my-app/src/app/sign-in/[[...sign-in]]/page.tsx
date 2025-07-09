"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignIn.Root>
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
              <p className="text-gray-500 mt-2">
                Sign in to continue to your account
              </p>
            </div>

            <SignIn.Step name="start">
              <Clerk.Connection
                name="google"
                className="w-full flex items-center justify-center gap-3 border border-gray-200 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors text-gray-700 font-medium text-sm"
              >
                <Clerk.Icon className="w-5 h-5" />
                Continue with Google
              </Clerk.Connection>

              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              <Clerk.Field name="identifier" className="space-y-2">
                <Clerk.Label className="text-sm font-medium text-gray-700">
                  Email address
                </Clerk.Label>
                <Clerk.Input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="your@email.com"
                />
                <Clerk.FieldError className="text-red-500 text-xs" />
              </Clerk.Field>

              {/* Add margin below the field group */}
              <div className="mt-6">
                <SignIn.Action
                  submit
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue with Email
                </SignIn.Action>
              </div>
            </SignIn.Step>

            <SignIn.Step name="verifications">
              <SignIn.Strategy name="email_code">
                <div className="space-y-6">
                  <div className="text-center">
                    <h1 className="text-xl font-bold text-gray-800">
                      Check your email
                    </h1>
                    <p className="text-gray-500 mt-2">
                      We sent a verification code to <SignIn.SafeIdentifier />.
                    </p>
                  </div>

                  <Clerk.Field name="code" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-gray-700">
                      Verification code
                    </Clerk.Label>
                    <Clerk.Input
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-center tracking-widest"
                      placeholder="123456"
                    />
                    <Clerk.FieldError className="text-red-500 text-xs" />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Verify Code
                  </SignIn.Action>

                  <p className="text-sm text-gray-500 text-center">
                    Didn't receive a code?{" "}
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => window.location.reload()}
                    >
                      Resend
                    </button>
                  </p>
                </div>
              </SignIn.Strategy>
            </SignIn.Step>
          </div>
        </SignIn.Root>
      </div>
    </section>
  );
}
