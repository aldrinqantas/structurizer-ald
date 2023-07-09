"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Loader2,
  Layers,
  LayoutGrid,
  LucideProps,
  TextSelect,
  CheckCircle,
  CheckCircle2,
  LogOut,
  HelpCircle,
  UploadCloud,
  File,
  XCircle,
  Frown,
  ChevronsUpDown,
  Brackets,
  Trash,
  PlusCircle,
  Inbox,
  AlertCircle,
  PieChart,
  RefreshCw,
  PanelRightOpen,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  spinner: Loader2,
  layers: Layers,
  grid: LayoutGrid,
  textSelect: TextSelect,
  braces: Braces,
  checkCircle: CheckCircle,
  checkCircleInside: CheckCircle2,
  logOut: LogOut,
  help: HelpCircle,
  upload: UploadCloud,
  file: File,
  close: XCircle,
  frown: Frown,
  chevronsUpDown: ChevronsUpDown,
  brackets: Brackets,
  trash: Trash,
  plusCircle: PlusCircle,
  empty: Inbox,
  alertCircle: AlertCircle,
  pieChart: PieChart,
  refresh: RefreshCw,
  sheetOpen: PanelRightOpen,
  receipt: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  ),
  invoice: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  ),
  creditCard: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
      />
    </svg>
  ),
  settings: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  sparkles: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

export function CircleCheckIcon({ ...props }: LucideProps) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.7,
            ease: "easeOut",
            type: "tween",
          },
        }}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.8,
            ease: "easeOut",
            type: "tween",
          },
        }}
        d="m9 12 2 2 4-4"
      />
    </svg>
  );
}

export function SparklesIcon({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <motion.svg
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className={className}
    >
      <defs>
        <defs>
          <motion.linearGradient id="gradient">
            <stop offset="10%" stopColor="#FD95FF" />
            <stop offset="90%" stopColor="#00E1F0" />
            <animateTransform
              attributeName="gradientTransform"
              attributeType="XML"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.linearGradient>
        </defs>
        <defs>
          <motion.linearGradient id="gradient-reverse">
            <stop offset="10%" stopColor="#00E1F0" />
            <stop offset="90%" stopColor="#FD95FF" />
            <animateTransform
              attributeName="gradientTransform"
              attributeType="XML"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.linearGradient>
        </defs>
      </defs>
      <motion.path
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        fill="url(#gradient-reverse)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 18C19.0869 18 19.1715 18.0284 19.2409 18.0807C19.3102 18.1331 19.3607 18.2066 19.3846 18.2902L19.8182 19.8081C19.9116 20.135 20.0867 20.4327 20.3271 20.6731C20.5675 20.9135 20.8652 21.0886 21.1922 21.182L22.7101 21.6156C22.7937 21.6395 22.8671 21.69 22.9194 21.7594C22.9717 21.8288 23 21.9133 23 22.0002C23 22.087 22.9717 22.1716 22.9194 22.2409C22.8671 22.3103 22.7937 22.3608 22.7101 22.3847L21.1922 22.8183C20.8652 22.9117 20.5675 23.0868 20.3271 23.3272C20.0867 23.5676 19.9116 23.8653 19.8182 24.1922L19.3846 25.7102C19.3606 25.7937 19.3102 25.8671 19.2408 25.9194C19.1714 25.9717 19.0869 26 19 26C18.9131 26 18.8286 25.9717 18.7592 25.9194C18.6898 25.8671 18.6394 25.7937 18.6154 25.7102L18.1818 24.1922C18.0884 23.8653 17.9133 23.5676 17.6729 23.3272C17.4325 23.0868 17.1348 22.9117 16.8078 22.8183L15.2899 22.3847C15.2063 22.3608 15.1329 22.3103 15.0806 22.2409C15.0283 22.1716 15 22.087 15 22.0002C15 21.9133 15.0283 21.8288 15.0806 21.7594C15.1329 21.69 15.2063 21.6395 15.2899 21.6156L16.8078 21.182C17.1348 21.0886 17.4325 20.9135 17.6729 20.6731C17.9133 20.4327 18.0884 20.135 18.1818 19.8081L18.6154 18.2902C18.6393 18.2066 18.6898 18.1331 18.7591 18.0807C18.8285 18.0284 18.9131 18 19 18Z"
      />
      <motion.path
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 0.9, 1],
          transition: {
            duration: 3,
            delay: 0.3,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        fill="url(#gradient)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7494 5.00002C10.9395 5.00006 11.1244 5.06202 11.2762 5.17654C11.428 5.29105 11.5383 5.45188 11.5905 5.63469L12.539 8.95502C12.7433 9.67009 13.1264 10.3213 13.6522 10.8472C14.1781 11.373 14.8293 11.7561 15.5444 11.9604L18.8647 12.9089C19.0474 12.9612 19.2081 13.0716 19.3225 13.2233C19.4369 13.3751 19.4987 13.56 19.4987 13.75C19.4987 13.9401 19.4369 14.1249 19.3225 14.2767C19.2081 14.4285 19.0474 14.5389 18.8647 14.5912L15.5444 15.5397C14.8293 15.7439 14.1781 16.127 13.6522 16.6529C13.1264 17.1787 12.7433 17.83 12.539 18.545L11.5905 21.8654C11.5382 22.048 11.4278 22.2087 11.276 22.3231C11.1243 22.4375 10.9394 22.4994 10.7494 22.4994C10.5593 22.4994 10.3745 22.4375 10.2227 22.3231C10.0709 22.2087 9.96054 22.048 9.9082 21.8654L8.9597 18.545C8.75548 17.83 8.37235 17.1787 7.8465 16.6529C7.32065 16.127 6.66944 15.7439 5.95437 15.5397L2.63404 14.5912C2.45134 14.5389 2.29065 14.4285 2.17626 14.2767C2.06187 14.1249 2 13.9401 2 13.75C2 13.56 2.06187 13.3751 2.17626 13.2233C2.29065 13.0716 2.45134 12.9612 2.63404 12.9089L5.95437 11.9604C6.66944 11.7561 7.32065 11.373 7.8465 10.8472C8.37235 10.3213 8.75548 9.67009 8.9597 8.95502L9.9082 5.63469C9.96042 5.45188 10.0708 5.29105 10.2225 5.17654C10.3743 5.06202 10.5592 5.00006 10.7494 5.00002Z"
      />
      <motion.path
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 0.95, 1],
          transition: {
            duration: 2.5,
            delay: 0.2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        fill="url(#gradient-reverse)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2.00001C21.1086 2.00003 21.2143 2.03544 21.3011 2.10088C21.3878 2.16632 21.4509 2.25822 21.4807 2.36269L22.0227 4.26009C22.1394 4.66872 22.3584 5.04085 22.6589 5.34135C22.9594 5.64185 23.3316 5.86078 23.7402 5.97749L25.6377 6.51951C25.7421 6.54942 25.8339 6.6125 25.8993 6.69922C25.9646 6.78594 26 6.89159 26 7.00019C26 7.10879 25.9646 7.21444 25.8993 7.30116C25.8339 7.38788 25.7421 7.45097 25.6377 7.48088L23.7402 8.0229C23.3316 8.1396 22.9594 8.35854 22.6589 8.65903C22.3584 8.95953 22.1394 9.33166 22.0227 9.74029L21.4807 11.6377C21.4508 11.7421 21.3877 11.8339 21.301 11.8993C21.2143 11.9647 21.1086 12 21 12C20.8914 12 20.7857 11.9647 20.699 11.8993C20.6123 11.8339 20.5492 11.7421 20.5193 11.6377L19.9773 9.74029C19.8606 9.33166 19.6416 8.95953 19.3411 8.65903C19.0406 8.35854 18.6684 8.1396 18.2598 8.0229L16.3623 7.48088C16.2579 7.45097 16.1661 7.38788 16.1007 7.30116C16.0354 7.21444 16 7.10879 16 7.00019C16 6.89159 16.0354 6.78594 16.1007 6.69922C16.1661 6.6125 16.2579 6.54942 16.3623 6.51951L18.2598 5.97749C18.6684 5.86078 19.0406 5.64185 19.3411 5.34135C19.6416 5.04085 19.8606 4.66872 19.9773 4.26009L20.5193 2.36269C20.5491 2.25822 20.6122 2.16632 20.6989 2.10088C20.7857 2.03544 20.8913 2.00003 21 2.00001Z"
      />
    </motion.svg>
  );
}
