"use client"

import React from "react";

import Link from "next/link";

import { Divider } from "@components/Divider";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { Apple, Google, Lock, Mail } from "@icons";

import classes from "./Login.module.scss";
import { useRouter } from "next/navigation";

export const LoginPage = () => {
  const router = useRouter();

  return (
    <div className={classes["login_container"]}>
      <div className={classes["image_container"]}>
        <img className={classes["group"]} src="/Images/Sign_In_Cover.svg" />
      </div>

      <div className={classes["login"]}>
        <div className={classes["frame_wrapper"]}>
          <div className={classes["frame_2"]}>
            <h1>Sign in</h1>

            <div className={classes["login_form"]}>
              <div className={classes["frame_3"]}>
                <p className={classes["p"]}>Sign in with Open accounts</p>

                <div className={classes["frame_4"]}>
                  <Button
                    icon={<Google height={20} width={20} />}
                    size="medium"
                    style="secondary"
                  >
                    Google
                  </Button>
                  <Button
                    icon={<Apple height={20} width={20} />}
                    size="medium"
                    style="secondary"
                  >
                    Apple ID
                  </Button>
                </div>
              </div>

              <Divider direction="horizontal" size="small" variant="light" />

              <div className={classes["email"]}>
                <p className={classes["p"]}>Or continue with email address</p>

                <div className={classes["email_form"]}>
                  <Input
                    placeholder={"Enter your email"}
                    icon={<Mail height={20} width={20} />}
                  />

                  <Input
                    type="password"
                    placeholder={"Enter your Password"}
                    icon={<Lock height={20} width={20} />}
                  />

                  <Button
                    size="medium"
                    onClick={() => router.push("/")}
                    style="primary"
                    width="100%"
                  >
                    Sign in
                  </Button>
                </div>
              </div>
              <p className={classes["text_wrapper_3"]}>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy.
              </p>

              <p className={classes["don_t_have_an"]}>
                <span className={classes["span"]}>
                  Don’t have an account?&nbsp;&nbsp;
                </span>
                <Link href={"/signup"} className={classes["text_wrapper_4"]}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
