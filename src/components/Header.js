"use client";
import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import SVG from "react-inlinesvg";
import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";
const Profile = ({ name, description, profilePicture }) => {
  return (
    <div className="px-4">
      <div className="grid max-w-lg grid-cols-1 justify-items-center gap-8">
        <PrismicNextLink href="/" tabIndex="-1">
          <div className="relative h-40 w-40 overflow-hidden rounded-full bg-slate-300">
            {prismic.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={settings.data.profilePicture}
                fill={true}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </PrismicNextLink>
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="grid grid-cols-1 gap-2 text-center">
            {prismic.isFilled.richText(name) && (
              <Heading>
                <PrismicNextLink href="/">
                  <PrismicText field={name} />
                </PrismicNextLink>
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <p className="font-serif text-2xl italic leading-normal tracking-tight text-slate-500">
                <PrismicText field={description} />
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const NavItem = ({ children }) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  withProfile = true,
  navigation,
  settings,
}) => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-300 dark:bg-gray-900">
      <div className="container">
        <div className="row">
          <ThemeSwitcher />
        </div>
        <div className="row justify-center">
          <div className="lg:col-6">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
            >
              <div className="row justify-center items-center">
                <div className="lg:col-6">
                  <Link href="/">
                    <PrismicNextImage
                      field={settings.data.profilePicture}
                      width={220}
                      height={220}
                      alt="enisprofile"
                      className="mx-auto rounded-full border-4 pt-3 bg-white border-yellow-500"
                    />
                  </Link>
                </div>
                <div className="lg:col-6 text-center lg:text-start mt-10 lg:mt-0">
                  <h1 className="text-black dark:text-white font-bold text-4xl">
                    Enis Miftari
                  </h1>
                  <p className="mt-5 text-black dark:text-white text-2xl">
                    UX / UI Designer
                  </p>
                  <div className="inline-flex items-center space-x-9">
                    <a
                      href="https://github.com/miftarienis"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 my-2 py-2"
                    >
                      <SVG
                        src="/svg/git-logo.svg"
                        className="w-5 h-5 fill-current text-gray-900 dark:text-white"
                      />
                    </a>
                    <a
                      href="https://behance.net/enismiftari"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-2"
                    >
                      <SVG
                        src="/svg/be-logo.svg"
                        className="w-5 h-5 fill-current text-gray-900 dark:text-white"
                      />
                    </a>
                    <a
                      href="https://dribbble.com/enisnino"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-2"
                    >
                      <SVG
                        src="/svg/dribble-logo.svg"
                        className="w-5 h-5 fill-current text-gray-900 dark:text-white"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/enismiftari/"
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-2"
                    >
                      <SVG
                        src="/svg/in-logo.svg"
                        className="w-5 h-5 fill-current text-gray-900 dark:text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row justify-center py-20">
          <div className="lg:col-6">
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
            >
              <div className="bg-white dark:bg-yellow-500 py-3 px-5 rounded-2xl">
                <div className="row g-0 text-center">
                  <div
                    className={`col-6 rounded-2xl bg-transparent group hover:bg-gray-900 ${
                      pathname == "/about" ? "bg-gray-900" : "bg-transparent"
                    }  transition-all ease-in-out duration-500`}
                  >
                    <Link href="/about" legacyBehavior>
                      <a
                        className={`${
                          pathname == "/about" ? "text-white bg-gray-900" : ""
                        } text-gray-900 block rounded-2xl py-5 text-2xl group-hover:text-white`}
                      >
                        About
                      </a>
                    </Link>
                  </div>
                  <div
                    className={`col-6 rounded-2xl bg-transparent group hover:bg-gray-900 ${
                      pathname == "/contact" ? "bg-gray-900" : "bg-transparent"
                    }  transition-all ease-in-out duration-500`}
                  >
                    <Link href="/contact" legacyBehavior>
                      <a
                        className={`${
                          pathname == "/contact" ? "text-white bg-gray-900" : ""
                        } 
                          text-gray-900 block py-5 text-2xl rounded-2xl group-hover:text-white`}
                      >
                        Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};
