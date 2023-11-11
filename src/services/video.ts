import { random } from "./random";

export type QuackTubeVideo = {
  title: string;
  url: string;
  attribution: string;
};

export const videos: QuackTubeVideo[] = [
  {
    title: "Musta joutsen",
    url: "https://hardcore-react-training.s3.eu-north-1.amazonaws.com/black-swan.webm",
    attribution:
      "The Nature Box, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
  },
  {
    title: "Quaak Quaak! Qaak!",
    url: "https://hardcore-react-training.s3.eu-north-1.amazonaws.com/mallard.webm",
    attribution:
      "https://en.wikipedia.org/wiki/File:Canard_colvert_femelle_et_ses_petits_(Lac_Archambault,_Qc).webm"
  }
];

export const getVideos = async (): Promise<QuackTubeVideo[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(videos);
      },
      random.integer(100, 300)
    );
  });
};
