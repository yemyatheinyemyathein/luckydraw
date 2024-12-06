import LuckyDraw from "./views/LuckyDraw"

const router = [
  {
    path: "/",
    element: <LuckyDraw />,
    children: [
      {
        path: "/",
        element: <LuckyDraw />,
      }
    ],
  },
];

export default router;
