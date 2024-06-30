"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Cards = ({ data }) => {
  return (
    <>
      <div className="max-w-2xl px-8 py-4 shadow-sm shadow-pink-400  bg-white  dark:bg-black border border-gray-500 rounded-xl ">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-black dark:text-white">
            {``}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabIndex={0}
            role="button"
          >
            {data.tag}
          </a>
        </div>
        <div className="mt-2">
          <h3
            className="text-xl font-semibold text-gray-700 dark:text-white dark:hover:text-gray-200 "
            tabIndex={0}
          >
            {data.idea}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 flex justofy-center items-center gap-2">

            {data.creator.username == "mohammad arshad" ? (
              <>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width={18}
                    height={18}
                    viewBox="0 0 256 256"
                    xmlSpace="preserve"
                  >
                    <defs></defs>
                    <g
                      style={{
                        stroke: "currentColor",
                        strokeWidth: 0,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "none",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 27.571 39.543 c -1.498 0 -2.994 -0.351 -4.403 -1.05 c -0.495 -0.246 -0.697 -0.846 -0.452 -1.34 c 0.246 -0.495 0.845 -0.697 1.34 -0.452 c 2.051 1.018 4.333 1.113 6.423 0.269 c 2.298 -0.929 4.068 -2.856 4.984 -5.428 c 0.186 -0.521 0.755 -0.793 1.277 -0.606 c 0.521 0.186 0.792 0.757 0.606 1.277 c -1.111 3.118 -3.284 5.465 -6.119 6.611 C 30.041 39.304 28.805 39.543 27.571 39.543 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20.61 27.528 c -0.326 0 -0.646 -0.159 -0.838 -0.453 c -2.445 -3.737 -2.833 -7.665 -1.187 -12.008 c 0.196 -0.516 0.774 -0.776 1.29 -0.581 c 0.516 0.196 0.776 0.773 0.581 1.29 c -1.403 3.703 -1.079 7.041 0.991 10.205 c 0.302 0.462 0.173 1.082 -0.29 1.384 C 20.988 27.476 20.798 27.528 20.61 27.528 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 26.671 27.465 c -0.461 0 -0.875 -0.32 -0.977 -0.789 c -0.116 -0.54 0.227 -1.072 0.767 -1.188 c 5.825 -1.256 7.87 -5.047 6.437 -11.929 c -0.113 -0.541 0.234 -1.07 0.775 -1.183 c 0.542 -0.115 1.07 0.234 1.183 0.775 c 1.663 7.984 -1.02 12.793 -7.973 14.292 C 26.811 27.458 26.74 27.465 26.671 27.465 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 33.817 49.177 c -0.263 0 -0.527 -0.008 -0.792 -0.023 c -0.551 -0.032 -0.972 -0.505 -0.94 -1.056 c 0.033 -0.552 0.5 -0.963 1.057 -0.94 c 3.033 0.172 5.953 -0.839 8.014 -2.783 c 1.861 -1.756 2.845 -4.071 2.845 -6.695 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 c 0 3.143 -1.234 6.037 -3.473 8.15 C 40.25 47.979 37.111 49.177 33.817 49.177 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 25.478 65.952 c -0.097 0 -0.195 -0.014 -0.292 -0.043 c -0.528 -0.161 -0.826 -0.72 -0.665 -1.248 c 1.913 -6.28 -0.03 -10.144 -6.115 -12.158 c -0.524 -0.174 -0.809 -0.739 -0.635 -1.264 c 0.173 -0.524 0.737 -0.808 1.264 -0.635 c 7.148 2.367 9.638 7.292 7.399 14.639 C 26.302 65.675 25.906 65.952 25.478 65.952 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 24.23 55.893 c -0.357 0 -0.703 -0.191 -0.883 -0.528 c -1.659 -3.104 -1.747 -6.255 -0.261 -9.368 c 0.238 -0.499 0.835 -0.709 1.333 -0.472 c 0.499 0.238 0.709 0.834 0.472 1.333 c -1.213 2.543 -1.141 5.017 0.22 7.563 c 0.26 0.487 0.077 1.094 -0.411 1.354 C 24.551 55.854 24.389 55.893 24.23 55.893 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 40.434 76.013 c -0.164 0 -0.33 -0.04 -0.483 -0.125 c -6.651 -3.681 -8.326 -8.996 -4.978 -15.8 c 0.244 -0.495 0.843 -0.698 1.339 -0.456 c 0.496 0.244 0.7 0.844 0.456 1.339 c -2.868 5.828 -1.549 10.013 4.152 13.167 c 0.483 0.268 0.658 0.876 0.391 1.359 C 41.128 75.826 40.786 76.013 40.434 76.013 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 34.445 80.061 c -0.198 0 -0.398 -0.059 -0.572 -0.181 c -0.453 -0.316 -0.563 -0.94 -0.246 -1.393 c 1.588 -2.27 1.901 -4.72 0.957 -7.49 c -0.178 -0.522 0.102 -1.091 0.624 -1.269 c 0.523 -0.181 1.091 0.102 1.27 0.624 c 1.148 3.369 0.741 6.492 -1.211 9.281 C 35.071 79.912 34.76 80.061 34.445 80.061 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 15.834 64.786 c -1.715 0 -3.419 -0.71 -5.092 -2.126 c -0.422 -0.357 -0.474 -0.988 -0.117 -1.41 c 0.356 -0.423 0.987 -0.472 1.409 -0.117 c 1.876 1.588 3.666 2.021 5.477 1.326 c 0.514 -0.195 1.094 0.059 1.292 0.574 c 0.199 0.516 -0.059 1.095 -0.574 1.293 C 17.429 64.633 16.631 64.786 15.834 64.786 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 12.256 39.571 c -0.307 0 -0.609 -0.141 -0.806 -0.406 c -0.328 -0.444 -0.233 -1.07 0.211 -1.398 c 1.244 -0.917 2.515 -1.57 3.778 -1.938 c 0.531 -0.153 1.086 0.15 1.24 0.68 c 0.155 0.53 -0.15 1.085 -0.68 1.24 c -1.037 0.303 -2.098 0.85 -3.151 1.628 C 12.67 39.507 12.462 39.571 12.256 39.571 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 37.297 54.997 c -0.425 0 -0.82 -0.273 -0.954 -0.701 c -1.015 -3.244 0.228 -6.967 2.827 -8.475 c 0.477 -0.278 1.089 -0.116 1.367 0.363 c 0.277 0.478 0.115 1.09 -0.363 1.367 c -1.794 1.041 -2.657 3.799 -1.922 6.147 c 0.165 0.527 -0.129 1.088 -0.656 1.253 C 37.496 54.982 37.396 54.997 37.297 54.997 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 33.995 21.206 c -0.173 0 -0.349 -0.045 -0.508 -0.14 c -0.476 -0.281 -0.633 -0.895 -0.351 -1.37 c 0.943 -1.594 2.519 -3.736 5.298 -3.941 c 0.562 -0.052 1.03 0.373 1.071 0.923 c 0.041 0.551 -0.373 1.03 -0.923 1.071 c -1.424 0.105 -2.573 1.02 -3.725 2.966 C 34.67 21.03 34.337 21.206 33.995 21.206 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45.001 80.291 c -0.552 0 -1 -0.447 -1 -1 L 44 8.688 c 0 -0.552 0.448 -1 1 -1 s 1 0.448 1 1 l 0.001 70.604 C 46.001 79.844 45.553 80.291 45.001 80.291 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 24.097 83.366 c -8.065 0 -14.626 -7.197 -14.626 -16.045 c 0 -1.764 0.261 -3.496 0.776 -5.159 c -2.845 -3.017 -4.465 -7.184 -4.465 -11.537 c 0 -4.781 1.878 -9.196 5.182 -12.253 c -1.462 -2.553 -2.231 -5.478 -2.231 -8.515 c 0 -6.883 4.094 -13.068 10.014 -15.227 c 2.298 -5.956 7.535 -9.777 13.465 -9.777 c 1.815 0 3.608 0.375 5.328 1.113 c 0.508 0.218 0.742 0.806 0.524 1.313 s -0.807 0.742 -1.313 0.524 c -1.469 -0.631 -2.996 -0.951 -4.539 -0.951 c -5.221 0 -9.833 3.494 -11.749 8.902 l -0.165 0.465 l -0.47 0.152 c -5.355 1.734 -9.096 7.279 -9.096 13.484 c 0 2.949 0.817 5.775 2.362 8.172 l 0.482 0.747 l -0.686 0.566 c -3.247 2.682 -5.109 6.794 -5.109 11.283 c 0 4.038 1.569 7.886 4.304 10.556 l 0.456 0.445 l -0.21 0.602 c -0.571 1.63 -0.861 3.344 -0.861 5.094 c 0 7.744 5.664 14.045 12.626 14.045 c 0.987 0 1.978 -0.131 2.946 -0.389 c 0.536 -0.14 1.082 0.176 1.224 0.71 c 0.142 0.533 -0.175 1.081 -0.709 1.224 C 26.422 83.213 25.257 83.366 24.097 83.366 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45.001 9.688 c -0.552 0 -1 -0.448 -1 -1 C 44.001 5 41.326 2 38.038 2 c -2.453 0 -4.626 1.651 -5.539 4.207 c -0.186 0.52 -0.76 0.792 -1.278 0.605 c -0.521 -0.186 -0.792 -0.758 -0.606 -1.278 C 31.816 2.172 34.729 0 38.038 0 c 4.391 0 7.963 3.897 7.963 8.688 C 46.001 9.24 45.553 9.688 45.001 9.688 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 36.207 90 c -5.4 0 -9.793 -4.804 -9.793 -10.709 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 c 0 4.802 3.496 8.709 7.793 8.709 s 7.793 -3.907 7.793 -8.709 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 C 46.001 85.196 41.607 90 36.207 90 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 59.406 36.52 c -1.235 0 -2.471 -0.239 -3.659 -0.719 c -2.834 -1.146 -5.007 -3.494 -6.118 -6.611 c -0.185 -0.52 0.087 -1.092 0.606 -1.277 c 0.521 -0.185 1.092 0.086 1.278 0.606 c 0.916 2.572 2.686 4.5 4.983 5.428 c 2.09 0.846 4.372 0.749 6.423 -0.269 c 0.493 -0.245 1.095 -0.043 1.34 0.452 c 0.246 0.495 0.044 1.095 -0.451 1.34 C 62.4 36.168 60.904 36.52 59.406 36.52 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 71.12 23.594 c -0.075 0 -0.152 -0.008 -0.229 -0.026 c -0.538 -0.125 -0.872 -0.664 -0.746 -1.201 c 0.487 -2.083 0.291 -4.239 -0.601 -6.59 c -0.195 -0.517 0.064 -1.094 0.581 -1.29 c 0.518 -0.195 1.094 0.064 1.29 0.581 c 1.021 2.697 1.249 5.306 0.677 7.754 C 71.986 23.283 71.574 23.594 71.12 23.594 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 61.739 29.093 c -0.182 0 -0.366 -0.049 -0.531 -0.153 c -6.021 -3.786 -6.898 -9.222 -2.607 -16.157 c 0.291 -0.47 0.907 -0.614 1.377 -0.324 c 0.47 0.291 0.614 0.907 0.324 1.377 c -3.699 5.978 -3.073 10.239 1.971 13.411 c 0.468 0.294 0.608 0.912 0.314 1.379 C 62.396 28.927 62.071 29.093 61.739 29.093 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45 78.179 c -0.552 0 -1 -0.447 -1 -1 c 0 -3.144 1.233 -6.038 3.473 -8.15 c 2.46 -2.322 5.915 -3.535 9.503 -3.323 c 0.551 0.032 0.972 0.505 0.939 1.057 c -0.031 0.551 -0.487 0.965 -1.057 0.939 c -3.023 -0.168 -5.952 0.837 -8.013 2.781 C 46.984 72.239 46 74.555 46 77.179 C 46 77.731 45.552 78.179 45 78.179 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 61.393 70.74 c -0.35 0 -0.688 -0.184 -0.872 -0.509 c -0.271 -0.481 -0.101 -1.092 0.38 -1.362 c 5.585 -3.146 6.75 -7.311 3.666 -13.105 c -0.26 -0.487 -0.074 -1.093 0.413 -1.353 c 0.486 -0.263 1.094 -0.074 1.353 0.413 c 3.607 6.78 2.11 12.092 -4.449 15.787 C 61.728 70.699 61.559 70.74 61.393 70.74 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 67.548 74.76 c -0.306 0 -0.607 -0.14 -0.804 -0.404 c -2.056 -2.77 -2.575 -5.88 -1.543 -9.243 c 0.162 -0.527 0.72 -0.825 1.249 -0.663 c 0.528 0.162 0.825 0.722 0.663 1.249 c -0.847 2.761 -0.442 5.203 1.236 7.466 c 0.329 0.443 0.236 1.069 -0.207 1.398 C 67.964 74.695 67.755 74.76 67.548 74.76 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 51.425 51.007 c -0.239 0 -0.479 -0.085 -0.671 -0.258 c -0.409 -0.371 -0.441 -1.003 -0.071 -1.413 c 5.086 -5.624 10.645 -6.034 16.521 -1.212 c 0.428 0.351 0.489 0.98 0.14 1.407 c -0.351 0.428 -0.98 0.489 -1.407 0.14 c -5.039 -4.133 -9.412 -3.813 -13.769 1.007 C 51.969 50.896 51.698 51.007 51.425 51.007 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 60.726 46.941 c -0.529 0 -0.971 -0.415 -0.998 -0.95 c -0.027 -0.551 0.397 -1.021 0.949 -1.048 c 2.923 -0.146 5.084 -1.342 6.606 -3.657 c 0.303 -0.46 0.923 -0.588 1.385 -0.286 c 0.461 0.304 0.589 0.924 0.285 1.385 c -1.871 2.844 -4.622 4.377 -8.177 4.555 C 60.76 46.941 60.742 46.941 60.726 46.941 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 74.166 64.786 c -0.797 0 -1.596 -0.153 -2.395 -0.46 c -0.515 -0.198 -0.772 -0.777 -0.574 -1.293 s 0.776 -0.77 1.293 -0.574 c 1.808 0.697 3.601 0.263 5.476 -1.325 c 0.424 -0.357 1.054 -0.305 1.409 0.116 c 0.357 0.422 0.305 1.053 -0.116 1.409 C 77.586 64.076 75.881 64.786 74.166 64.786 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 77.745 39.571 c -0.206 0 -0.414 -0.063 -0.593 -0.195 c -1.055 -0.778 -2.114 -1.325 -3.151 -1.628 c -0.53 -0.155 -0.834 -0.71 -0.68 -1.24 c 0.155 -0.53 0.709 -0.835 1.24 -0.68 c 1.263 0.369 2.534 1.021 3.778 1.938 c 0.444 0.328 0.539 0.954 0.211 1.398 C 78.355 39.43 78.052 39.571 77.745 39.571 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 50.329 69.173 c -0.345 0 -0.681 -0.179 -0.866 -0.498 c -0.277 -0.478 -0.114 -1.09 0.363 -1.367 c 1.795 -1.042 2.657 -3.8 1.923 -6.147 c -0.165 -0.527 0.128 -1.088 0.655 -1.253 c 0.529 -0.167 1.088 0.129 1.253 0.655 c 1.015 3.243 -0.227 6.966 -2.827 8.476 C 50.672 69.13 50.499 69.173 50.329 69.173 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 56.994 20.707 c -0.472 0 -0.892 -0.335 -0.981 -0.815 c -0.417 -2.222 -1.185 -3.474 -2.487 -4.06 c -0.504 -0.227 -0.729 -0.818 -0.502 -1.322 c 0.227 -0.503 0.818 -0.727 1.322 -0.502 c 2.543 1.144 3.291 3.695 3.632 5.515 c 0.103 0.543 -0.255 1.065 -0.798 1.167 C 57.117 20.702 57.055 20.707 56.994 20.707 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45 80.291 L 45 80.291 c -0.552 0 -1 -0.447 -1 -1 l 0.001 -70.604 c 0 -0.552 0.448 -1 1 -1 l 0 0 c 0.552 0 1 0.448 1 1 L 46 79.291 C 46 79.844 45.552 80.291 45 80.291 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 65.904 83.366 c -1.16 0 -2.324 -0.153 -3.461 -0.455 c -0.534 -0.143 -0.852 -0.69 -0.71 -1.224 c 0.142 -0.534 0.691 -0.849 1.224 -0.71 c 0.969 0.258 1.961 0.389 2.947 0.389 c 6.962 0 12.626 -6.301 12.626 -14.045 c 0 -1.753 -0.289 -3.467 -0.86 -5.094 l -0.211 -0.602 l 0.456 -0.445 c 2.735 -2.67 4.304 -6.518 4.304 -10.556 c 0 -4.488 -1.862 -8.601 -5.108 -11.283 l -0.686 -0.566 l 0.481 -0.747 c 1.546 -2.396 2.362 -5.222 2.362 -8.172 c 0 -6.205 -3.74 -11.75 -9.095 -13.484 l -0.47 -0.152 l -0.165 -0.465 c -1.916 -5.408 -6.528 -8.902 -11.749 -8.902 c -1.543 0 -3.069 0.32 -4.539 0.951 c -0.509 0.217 -1.096 -0.017 -1.313 -0.524 s 0.017 -1.095 0.524 -1.313 c 1.72 -0.739 3.513 -1.113 5.328 -1.113 c 5.929 0 11.166 3.821 13.465 9.777 c 5.92 2.159 10.014 8.344 10.014 15.227 c 0 3.037 -0.769 5.962 -2.23 8.515 c 3.303 3.057 5.181 7.473 5.181 12.253 c 0 4.354 -1.62 8.521 -4.465 11.537 c 0.516 1.66 0.776 3.394 0.776 5.159 C 80.53 76.169 73.968 83.366 65.904 83.366 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 45 9.688 c -0.552 0 -1 -0.448 -1 -1 C 44 3.897 47.572 0 51.962 0 c 3.31 0 6.223 2.172 7.422 5.535 c 0.186 0.52 -0.085 1.092 -0.605 1.278 c -0.524 0.186 -1.093 -0.086 -1.277 -0.606 C 56.589 3.651 54.415 2 51.962 2 C 48.674 2 46 5 46 8.688 C 46 9.24 45.552 9.688 45 9.688 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                      <path
                        d="M 53.793 90 C 48.393 90 44 85.196 44 79.291 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 C 46 84.093 49.496 88 53.793 88 c 4.298 0 7.794 -3.907 7.794 -8.709 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 C 63.587 85.196 59.194 90 53.793 90 z"
                        style={{
                          stroke: "currentColor",
                          strokeWidth: 1,
                          strokeDasharray: "none",
                          strokeLinecap: "butt",
                          strokeLinejoin: "miter",
                          strokeMiterlimit: 10,
                          fill: "rgb(0,0,0)",
                          fillRule: "nonzero",
                          opacity: 1,
                        }}
                        transform=" matrix(1 0 0 1 0 0) "
                        strokeLinecap="round"
                      />
                    </g>
                  </svg>
                </span>
              </>
            ) :
              <>
                {data.creator.username}
              </>
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;

