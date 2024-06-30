import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="dark:bg-black bg-white dark:text-white text-black py-6 mb-16 lg:mb-4 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 ">
          <Image
            src="/ideas-dump.png"
            alt="logo"
            width={46}
            height={46}
            className="rounded-full mr-2"
          />
          <span className="font-semibold text-lg">ideas dump</span>
        </div>
        <div className="text-sm text-gray-400 mb-4 md:mb-0 lg:mt-16">
          &copy; 2024 ideas dump. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6 mr-2"
            >
              <path d="M4.646 4.646a.5.5 0 010-.707l.707-.707a.5.5 0 01.707 0L12 8.586l5.939-5.939a.5.5 0 01.707 0l.707.707a.5.5 0 010 .707L13.414 12l5.939 5.939a.5.5 0 010 .707l-.707.707a.5.5 0 01-.707 0L12 13.414l-5.939 5.939a.5.5 0 01-.707 0l-.707-.707a.5.5 0 010-.707L10.586 12 4.646 6.061z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577v-2.165c-3.338.727-4.033-1.415-4.033-1.415-.546-1.387-1.334-1.756-1.334-1.756-1.091-.745.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.833 2.809 1.304 3.495.997.107-.775.418-1.305.76-1.605-2.665-.302-5.466-1.334-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.477 11.477 0 013.007-.404c1.02.005 2.048.137 3.007.404 2.291-1.552 3.3-1.23 3.3-1.23.653 1.645.24 2.863.118 3.166.769.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.478 5.92.43.372.812 1.104.812 2.225v3.293c0 .318.218.694.825.576C20.565 22.09 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M465.1 0H46.9C21 0 0 21 0 46.9v418.3C0 491 21 512 46.9 512h418.3c25.9 0 46.9-21 46.9-46.9V46.9C512 21 491 0 465.1 0zM151.7 437.1h-81V198.8h81v238.3zm-40.5-266c-26.7 0-48.4-21.7-48.4-48.4s21.7-48.4 48.4-48.4c26.7 0 48.4 21.7 48.4 48.4s-21.7 48.4-48.4 48.4zm337.7 266h-81V315c0-23.4-.5-53.5-32.5-53.5-32.6 0-37.7 25.5-37.7 51.8v123.5h-81V198.8h78.7v27.6h1.1c10.9-20.7 37.6-42.5 77.7-42.5 83 0 98.3 54.6 98.3 125.7v143.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
