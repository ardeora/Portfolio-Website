import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  BackgroundGradientAnimation,
  BackgroundRedGradientAnimation,
} from "./BGGradient";

const useEffectOnce = (effect: React.EffectCallback) => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    effect();
  }, []);

  return hasRun.current;
};

const Heading = () => {
  useEffectOnce(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <div className="relative h-screen font-editorial">
      <div className="absolute left-1/2 top-1/2 z-10 max-w-3xl -translate-x-1/2 -translate-y-1/2">
        <p className="text-center text-5xl tracking-wide">
          <span className="inline-block bg-gradient-to-r from-nav-2-500 via-nav-1-400 to-nav-4-400 to-100% bg-clip-text leading-relaxed text-transparent">
            Hue Knew?
          </span>
        </p>
        <h1 className="text-balance text-center text-5xl leading-tight tracking-wide text-neutral-200">
          How Movie Poster Colors Signal Genre and Stir Emotions
        </h1>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute left-full top-full aspect-square h-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/60 blur-xl"></div>
        <div className="absolute bottom-full left-full aspect-square h-3/4 -translate-x-1/2 translate-y-1/2 rounded-full bg-green-900/60 blur-xl"></div>
        <div className="absolute bottom-full left-0 aspect-square h-3/4 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-900/60 blur-xl"></div>
        <div className="absolute left-0 top-full aspect-square h-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-900/60 blur-xl"></div> */}
        <div className="absolute left-0 top-0 h-full">
          <img
            src="/imgs/tswd/a6/4.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute right-0 top-0 h-full">
          <img
            src="/imgs/tswd/a6/5.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const animation = { duration: 50000, easing: (t: any) => t };

const Introduction = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(4, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    slides: { perView: "auto" },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: { perView: "auto" },
    rtl: true,
  });

  const [sliderRef3] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(4, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 4, true, animation);
    },
    slides: { perView: "auto" },
  });

  return (
    <div className="mt-40 min-h-screen px-4">
      <div className="mx-auto max-w-5xl pb-6 text-center font-editorial text-4xl text-neutral-300">
        The Hidden Language of Color
      </div>

      <div ref={sliderRef} className="keen-slider mx-auto mb-4 max-w-5xl">
        <div
          style={{ maxWidth: 398, minWidth: 398 }}
          className="keen-slider__slide number-slide1 h-44"
        >
          <img
            className="block h-40"
            src="/imgs/tswd/a6/lalaland/lalaland-1.jpg"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#8a0000]"></div>
        </div>
        <div
          style={{ maxWidth: 398, minWidth: 398 }}
          className="keen-slider__slide number-slide2 h-44"
        >
          <img
            className="block h-40"
            src="/imgs/tswd/a6/lalaland/lalaland-2.jpg"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#e9c414]"></div>
        </div>
        <div
          style={{ maxWidth: 398, minWidth: 398 }}
          className="keen-slider__slide number-slide3 h-44"
        >
          <img
            className="block h-40"
            src="/imgs/tswd/a6/lalaland/lalaland-3.jpg"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#00286e]"></div>
        </div>
        <div
          style={{ maxWidth: 398, minWidth: 398 }}
          className="keen-slider__slide number-slide4 h-44"
        >
          <img
            className="block h-40"
            src="/imgs/tswd/a6/lalaland/lalaland-4.jpg"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#c03380]"></div>
        </div>
      </div>

      <div ref={sliderRef2} className="keen-slider mx-auto mb-4 max-w-5xl">
        <div
          className="keen-slider__slide number-slide1 h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-7.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#230687]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide2 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-8.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#b443a4]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide3 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-5.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#00ad6a]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide4 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-6.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#b44305]"></div>
        </div>
      </div>

      <div ref={sliderRef3} className="keen-slider mx-auto mb-4 max-w-5xl">
        <div
          className="keen-slider__slide number-slide1 h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-9.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#1e6b6c]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide2 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-13.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#b76214]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide3 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-11.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#3a1d5b]"></div>
        </div>
        <div
          className="keen-slider__slide number-slide4 w-maxborder h-44"
          style={{ maxWidth: 398, minWidth: 398 }}
        >
          <img
            src="/imgs/tswd/a6/lalaland/lalaland-12.jpg"
            className="block h-40"
            alt="Movie Poster"
          />
          <div className="h-4 bg-[#d6ccbf]"></div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl pb-4 text-center text-sm leading-snug text-neutral-400">
        Source: La La Land. Directed by Damien Chazelle, Lionsgate, 2016.
      </div>

      <div className="mx-auto max-w-5xl pb-4 text-xl leading-snug text-neutral-300">
        Have you ever noticed how a movie can make you feel nostalgic, inspired,
        or uneasy without any words spoken? That's the power of color.
        Filmmakers skillfully use color palettes to set the mood and stir
        emotions, whether it's the warm, golden tones of a drama or the cool,
        muted shades of a thriller. I remember watching "La La Land" for the
        first time and being amazed by the bright blues, yellows, and reds. It
        felt like the colors mirrored the highs and lows of the characters'
        emotions. It's incredible how a well-chosen palette can turn simple
        scenes into something unforgettable.
      </div>

      <div className="mx-auto max-w-5xl text-xl leading-snug text-neutral-300">
        But the art of color doesn't start with the films themselves. Filmmakers
        use color in movie posters to convey themes and genres even before the
        first scene begins. Colors in movie posters are carefully picked to
        evoke feelings and give you a glimpse into what the movie is about. In
        this story, we'll explore how the hues and shades on posters communicate
        meaning and set the stage for what's to come.
      </div>
      <div className="flex h-[100vh] items-center justify-center">
        <div className="text-center font-editorial text-4xl text-neutral-300">
          Let's take a look at an example
        </div>
      </div>
      <div className="h-[5vh]"></div>
    </div>
  );
};

const IntroPosters = () => {
  useEffectOnce(() => {
    const redTextContainer = document.querySelector(".red-text")!;

    gsap.to("#red-poster", {
      scrollTrigger: {
        trigger: "#red-poster",
        start: "center 50%",
        end: () => `+=${redTextContainer.clientHeight - 100}`,
        pin: true,
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
      scale: 1.1,
      duration: 0.25,
    });

    gsap.utils.toArray(".red-text > div").forEach((el, i, arr) => {
      const element = el as HTMLElement;
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "center center",
          end: () => {
            const next = arr[i + 1] as HTMLElement;
            return `+=${element.clientHeight / 2 + 300 + (next?.clientHeight ? next.clientHeight / 2 : 0)}`;
          },
          id: `red-section-${i + 1}`,
          pin: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        duration: 0.25,
      });
    });
  });

  useEffectOnce(() => {
    const blueTextContainer = document.querySelector(".blue-text")!;

    gsap.to("#blue-poster", {
      scrollTrigger: {
        trigger: "#blue-poster",
        start: "center 50%",
        end: () => `+=${blueTextContainer.clientHeight - 100}`,
        pin: true,
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
      scale: 1.1,
      duration: 0.25,
    });

    gsap.utils.toArray(".blue-text > div").forEach((el, i, arr) => {
      const element = el as HTMLElement;
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "center center",
          end: () => {
            const next = arr[i + 1] as HTMLElement;
            return `+=${element.clientHeight / 2 + 300 + (next?.clientHeight ? next.clientHeight / 2 : 0)}`;
          },
          id: `blue-section-${i + 1}`,
          pin: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        duration: 0.25,
      });
    });
  });

  useEffectOnce(() => {
    const yellowTextContainer = document.querySelector(".yellow-text")!;

    gsap.to("#yellow-poster", {
      scrollTrigger: {
        trigger: "#yellow-poster",
        start: "center 50%",
        end: () => `+=${yellowTextContainer.clientHeight - 100}`,
        pin: true,
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
      scale: 1.1,
      duration: 0.25,
    });

    gsap.utils.toArray(".yellow-text > div").forEach((el, i, arr) => {
      const element = el as HTMLElement;
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "center center",
          end: () => {
            const next = arr[i + 1] as HTMLElement;
            return `+=${element.clientHeight / 2 + 300 + (next?.clientHeight ? next.clientHeight / 2 : 0)}`;
          },
          id: `yellow-section-${i + 1}`,
          pin: true,
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        duration: 0.25,
      });
    });
  });

  return (
    <div className="">
      <div className="mx-auto flex max-w-5xl">
        <div className="flex w-full flex-col gap-[100vh]">
          <div className="flex w-full gap-40">
            <div
              id="red-poster"
              className="h-[576px] w-[384px] max-w-sm bg-red-700"
            >
              <img src="/imgs/tswd/a6/1.png" alt="Movie Poster" />
            </div>

            <div className="red-text relative top-[288px] flex flex-1 flex-col gap-[300px] pb-[400px] text-2xl">
              <div
                className="font-editorial text-4xl text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                Here is a Red Movie Poster
              </div>

              <div
                className="font-editorial text-4xl leading-tight text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                The poster is filled with red hues and features an eye as the
                main focus, with a silhouette of a person facing it.
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                How does this poster make you feel? Can you guess the movie's
                genre from it?
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                Red is commonly associated with passion, love, and danger. It's
                a bold color that can provoke strong emotions and create a sense
                of urgency or excitement.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://www.colorpsychology.org/RED/"
                    className="underline"
                  >
                    Red Color Psychology, Symbolism and Meaning
                  </a>
                </div>
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                In this poster, the vivid red tones imply that the movie might
                be a thriller or horror film, as these genres often use red to
                build tension and suspense.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://slowburnhorror.com/2021/09/24/the-meaning-of-red-in-horror/"
                    className="underline"
                  >
                    The Meaning of Red in Horror
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-40">
            <div id="blue-poster" className="h-[576px] w-[384px] max-w-sm">
              <img src="/imgs/tswd/a6/2.png" alt="Movie Poster" />
            </div>

            <div className="blue-text relative top-[288px] flex flex-1 flex-col gap-[300px] pb-[400px] text-2xl">
              <div
                className="font-editorial text-4xl text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                Here is a similar Blue Movie Poster
              </div>

              <div
                className="font-editorial text-4xl leading-tight text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                The poster is bathed in blue tones and also features an eye as
                the main focal point, with a silhouette of a person facing it.
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                How does this poster make you feel? Can you guess the movie's
                genre based on it?
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                Blue is often associated with calmness, intelligence, and
                mystery. It's a color that can evoke feelings of depth and
                futuristic themes.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://www.wendyzhou.se/blog/what-colors-are-futuristic-is-blue-a-futuristic-color"
                    className="underline"
                  >
                    What colors are futuristic?
                  </a>
                </div>
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                In this poster, the cool blue hues suggest that the movie might
                be a sci-fi or action film, as these genres commonly use blue to
                convey a sense of technology and the unknown.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://strelka.co.uk/six-inspiring-colour-palette-approaches-for-your-sci-fi-film-poster/"
                    className="underline"
                  >
                    Strelka
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-40">
            <div id="yellow-poster" className="h-[576px] w-[384px] max-w-sm">
              <img src="/imgs/tswd/a6/3.png" alt="Movie Poster" />
            </div>

            <div className="yellow-text relative top-[288px] flex flex-1 flex-col gap-[300px] pb-[400px] text-2xl">
              <div
                className="font-editorial text-4xl text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                Here is a Yellow Movie Poster.
              </div>

              <div
                className="font-editorial text-4xl leading-tight text-neutral-300"
                style={{
                  opacity: 0,
                }}
              >
                The poster is filled with yellow hues and features an eye as the
                main focal point, with a silhouette of a person facing it.
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                How does this poster make you feel? Can you guess the movie's
                genre based on it?
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                Yellow is often associated with happiness, optimism, and warmth.
                It's a color that can evoke feelings of joy and
                lightheartedness.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://www.colorwithleo.com/what-is-the-color-of-happiness-and-positivity/"
                    className="underline"
                  >
                    What is the color of happiness and positivity?
                  </a>
                </div>
              </div>

              <div
                style={{
                  opacity: 0,
                }}
                className="font-editorial text-4xl leading-tight text-neutral-300"
              >
                In this poster, the bright yellow tones suggest that the movie
                might be a romantic comedy, as this genre frequently uses yellow
                to convey a cheerful and uplifting atmosphere.
                <div className="pt-2 font-sans text-sm">
                  Source:{" "}
                  <a
                    href="https://digitalsynopsis.com/design/film-movies-color-psychology/"
                    className="underline"
                  >
                    Digital Synopsis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OutroPosters = () => {
  return (
    <div className="mt-[75vh] h-[75vh]">
      <div className="mx-auto max-w-5xl pb-6 text-center font-editorial text-4xl text-neutral-300">
        Data Project
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-xl leading-snug text-neutral-300">
            Using color intentionally in movie posters is more than just making
            them look good. Colors act as a quick way for audiences to
            understand a film's mood and genre. This idea is based on color
            psychology, where different colors trigger specific emotional
            responses. For example, red can show passion or danger, while blue
            might suggest calmness or detachment. When designers match the color
            scheme with the film's themes, they create a consistent and engaging
            visual story that connects with viewers even before they see the
            movie. This approach makes marketing materials more effective, so
            choosing the right colors is a key part of designing movie posters.
          </div>
          <div className="mx-auto max-w-5xl pb-4 text-xl leading-snug text-neutral-300">
            I watched an amazing video by James Verdesoto, a movie poster artist
            who explained how filmmakers use different color palettes to make
            their posters really effective.
          </div>
          <div className="mx-auto max-w-5xl pb-4 text-xl leading-snug text-neutral-300">
            After watching the video, I decided to start a data project. I went
            through Letterboxd and collected 100 posters each for red, yellow,
            green, and blue color hues. Then, I analyzed which genres were
            dominant in each color and found out which color posters were most
            popular for each genre. Here are my findings!
          </div>
        </div>
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BEbW2fXSShc?si=NAfqGqQWQmx59BgF&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const RedInfo = () => {
  return (
    <div className="pb-20">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/imgs/tswd/a6/red_bg.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-editorial text-8xl tracking-wide">
          <div>Red Posters</div>
          <div className="pt-2 font-sans text-3xl font-light uppercase tracking-[0.3em] text-neutral-300">
            Color Analysis
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Poster Color Palette Fingerprint
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Each segment shows a movie poster that has been compressed and
            blurred to create its unique color palette fingerprint.
          </div>

          <div className="relative">
            <img src="/imgs/tswd/a6/joined-red.png" alt="Movie Poster" />
            <div className="absolute inset-0 bg-red-500/20 mix-blend-color-burn"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Top Genres in Red Movie Posters
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Sample size: 100 movie posters
          </div>
          <RedCategories />
          <div className="text-center text-sm text-neutral-400">
            Source:{" "}
            <a
              href="https://letterboxd.com/"
              className="text-red-500 underline"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Genres Dominated by Red Movie Posters
          </div>
          <div className="pb-12 text-center font-sans text-sm text-neutral-400">
            Genres where red movie posters are most popular. Sample size: 400
          </div>
          <div className="mx-auto grid grid-cols-2 gap-6 pb-6">
            <div>
              <RedHorror />
              <div className="pt-2 text-center text-neutral-300">
                Horror Movies
              </div>
            </div>

            <div>
              <RedMystery />
              <div className="pt-2 text-center text-neutral-300">
                Mystery Movies
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <div>
              <div className="h-[500px] w-[500px]">
                <RedThriller />
              </div>
              <div className="pt-2 text-center text-neutral-300">
                Thriller Movies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const red_categories = {
  labels: [
    "Horror",
    "Romance",
    "Drama",
    "Comedy",
    "Thriller",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Action",
    "Crime",
    "History",
    "War",
    "Family",
    "TV Movie",
    "Music",
    "Adventure",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [72, 36, 36, 26, 26, 16, 12, 9, 6, 5, 3, 2, 1, 1, 1, 1],
      backgroundColor: [
        "#dc26265a",
        "#dc26265a",
        "#dc26265a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
      ],
      borderColor: [
        "#dc2626",
        "#dc2626",
        "#dc2626",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
      ],
      borderWidth: 1,
    },
  ],
};

const RedCategories = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "bar",
            data: red_categories,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
                x: {
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Genre: ";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label + ": " + toolTipItem.formattedValue
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const red_horror = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [72, 12, 10, 3],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const RedHorror = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: red_horror,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Horror";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const red_mystery = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [16, 7, 14, 2],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const RedMystery = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: red_mystery,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Mystery";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const red_thriller = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [26, 18, 22, 6],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const RedThriller = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: red_thriller,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Thriller";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const BlueInfo = () => {
  return (
    <div className="pb-20">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/imgs/tswd/a6/blue_bg.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(30, 64, 175)"
          gradientBackgroundEnd="rgb(6, 182, 212)"
          firstColor="109, 40, 217"
          secondColor="109, 40, 217"
          thirdColor="109, 40, 217"
          fourthColor="110, 30, 73"
          interactive={false}
        /> */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-editorial text-8xl tracking-wide">
          <div>Blue Posters</div>
          <div className="pt-2 font-sans text-3xl font-light uppercase tracking-[0.3em] text-neutral-300">
            Color Analysis
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Poster Color Palette Fingerprint
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Each segment shows a movie poster that has been compressed and
            blurred to create its unique color palette fingerprint.
          </div>

          <div className="relative">
            <img src="/imgs/tswd/a6/joined-blue.png" alt="Movie Poster" />
            <div className="absolute inset-0 bg-blue-500/30 mix-blend-color-burn"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Top Genres in Blue Movie Posters
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Sample size: 100 movie posters
          </div>
          <BlueCategories />
          <div className="text-center text-sm text-neutral-400">
            Source:{" "}
            <a
              href="https://letterboxd.com/"
              className="text-blue-500 underline"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Genres Dominated by Blue Movie Posters
          </div>
          <div className="pb-12 text-center font-sans text-sm text-neutral-400">
            Genres where blue movie posters are most popular. Sample size: 400
          </div>
          <div className="mx-auto grid grid-cols-2 gap-6 pb-6">
            <div>
              <BlueAction />
              <div className="pt-2 text-center text-neutral-300">
                Action Movies
              </div>
            </div>

            <div>
              <BlueSciFi />
              <div className="pt-2 text-center text-neutral-300">
                Science Fiction Movies
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <div>
              <div className="h-[500px] w-[500px]">
                <BlueDrama />
              </div>
              <div className="pt-2 text-center text-neutral-300">
                Drama Movies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const blue_categories = {
  labels: [
    "Drama",
    "Science Fiction",
    "Action",
    "Adventure",
    "Thriller",
    "Comedy",
    "Romance",
    "Fantasy",
    "Mystery",
    "Animation",
    "Family",
    "Horror",
    "Crime",
    "Documentary",
    "War",
    "Western",
    "Music",
    "History",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [51, 34, 34, 26, 22, 16, 15, 14, 14, 11, 11, 10, 7, 3, 2, 2, 1, 1],
      backgroundColor: [
        "#2563eb5a",
        "#2563eb5a",
        "#2563eb5a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
      ],
      borderColor: [
        "#2563eb",
        "#2563eb",
        "#2563eb",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
      ],
      borderWidth: 1,
    },
  ],
};

const BlueCategories = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "bar",
            data: blue_categories,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
                x: {
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Genre: ";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label + ": " + toolTipItem.formattedValue
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const blue_action = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [6, 24, 34, 10],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const BlueAction = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: blue_action,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Action";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const blue_sci_fi = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [12, 16, 34, 4],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const BlueSciFi = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: blue_sci_fi,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Science Fiction";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const blue_drama = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [36, 39, 51, 49],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const BlueDrama = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: blue_drama,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Drama";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const yellow_comedy = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [26, 21, 16, 82],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const YellowComedy = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: yellow_comedy,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Comedy";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const yellow_romance = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [36, 19, 15, 43],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const YellowRomance = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: yellow_romance,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Romance";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const yellow_crime = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [5, 8, 7, 17],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const YellowCrime = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: yellow_crime,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Crime";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const yellow_categories = {
  labels: [
    "Comedy",
    "Drama",
    "Romance",
    "Crime",
    "Adventure",
    "Action",
    "Family",
    "Animation",
    "Thriller",
    "Fantasy",
    "Music",
    "Science Fiction",
    "Horror",
    "War",
    "Mystery",
    "Western",
    "History",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [82, 51, 43, 17, 11, 10, 10, 7, 6, 6, 5, 4, 3, 3, 2, 1, 1],
      backgroundColor: [
        "#eab3085a",
        "#eab3085a",
        "#eab3085a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
      ],
      borderColor: [
        "#eab308",
        "#eab308",
        "#eab308",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
      ],
      borderWidth: 1,
    },
  ],
};

const YellowCategories = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "bar",
            data: yellow_categories,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
                x: {
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Genre: ";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label + ": " + toolTipItem.formattedValue
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const YellowInfo = () => {
  return (
    <div className="pb-20">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/imgs/tswd/a6/yellow_bg.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-editorial text-8xl tracking-wide">
          <div>Yellow Posters</div>
          <div className="pt-2 font-sans text-3xl font-light uppercase tracking-[0.3em] text-neutral-300">
            Color Analysis
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Poster Color Palette Fingerprint
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Each segment shows a movie poster that has been compressed and
            blurred to create its unique color palette fingerprint.
          </div>

          <div className="relative">
            <img src="/imgs/tswd/a6/joined-yellow.png" alt="Movie Poster" />
            <div className="absolute inset-0 bg-yellow-500/20 mix-blend-color-burn"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Top Genres in Yellow Movie Posters
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Sample size: 100 movie posters
          </div>
          <YellowCategories />
          <div className="text-center text-sm text-neutral-400">
            Source:{" "}
            <a
              href="https://letterboxd.com/"
              className="text-yellow-500 underline"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Genres Dominated by Yellow Movie Posters
          </div>
          <div className="pb-12 text-center font-sans text-sm text-neutral-400">
            Genres where yellow movie posters are most popular. Sample size: 400
          </div>
          <div className="mx-auto grid grid-cols-2 gap-6 pb-6">
            <div>
              <YellowComedy />
              <div className="pt-2 text-center text-neutral-300">
                Comedy Movies
              </div>
            </div>

            <div>
              <YellowRomance />
              <div className="pt-2 text-center text-neutral-300">
                Romance Movies
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <div>
              <div className="h-[500px] w-[500px]">
                <YellowCrime />
              </div>
              <div className="pt-2 text-center text-neutral-300">
                Crime Movies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const green_categories = {
  labels: [
    "Adventure",
    "Fantasy",
    "Drama",
    "Action",
    "Comedy",
    "Animation",
    "Family",
    "Romance",
    "Thriller",
    "Science Fiction",
    "Horror",
    "Crime",
    "Mystery",
    "History",
    "War",
    "Documentary",
    "TV Movie",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [47, 39, 39, 24, 21, 20, 19, 19, 18, 16, 12, 8, 7, 3, 2, 2, 1],
      backgroundColor: [
        "#16a34a5a",
        "#16a34a5a",
        "#16a34a5a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
        "#a3a3a35a",
      ],
      borderColor: [
        "#16a34a",
        "#16a34a",
        "#16a34a",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
        "#a3a3a3",
      ],
      borderWidth: 1,
    },
  ],
};

const GreenCategories = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "bar",
            data: green_categories,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
                x: {
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  grid: {
                    color: "#5252525a",
                  },
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Genre: ";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label + ": " + toolTipItem.formattedValue
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const GreenInfo = () => {
  return (
    <div className="pb-20">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/imgs/tswd/a6/green_bg.png"
            alt="Movie Poster"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-editorial text-8xl tracking-wide">
          <div>Green Posters</div>
          <div className="pt-2 font-sans text-3xl font-light uppercase tracking-[0.3em] text-neutral-300">
            Color Analysis
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Poster Color Palette Fingerprint
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Each segment shows a movie poster that has been compressed and
            blurred to create its unique color palette fingerprint.
          </div>

          <div className="relative">
            <img src="/imgs/tswd/a6/joined-green.png" alt="Movie Poster" />
            <div className="absolute inset-0 bg-green-400/40 mix-blend-color-burn"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Top Genres in Green Movie Posters
          </div>
          <div className="pb-4 text-center font-sans text-sm text-neutral-400">
            Sample size: 100 movie posters
          </div>
          <GreenCategories />
          <div className="text-center text-sm text-neutral-400">
            Source:{" "}
            <a
              href="https://letterboxd.com/"
              className="text-green-500 underline"
            >
              Letterboxd
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="text-center font-editorial text-3xl">
            Genres Dominated by Green Movie Posters
          </div>
          <div className="pb-12 text-center font-sans text-sm text-neutral-400">
            Genres where green movie posters are most popular. Sample size: 400
          </div>
          <div className="mx-auto grid grid-cols-2 gap-6 pb-6">
            <div>
              <GreenFantasy />
              <div className="pt-2 text-center text-neutral-300">
                Fantasy Movies
              </div>
            </div>

            <div>
              <GreenAdventure />
              <div className="pt-2 text-center text-neutral-300">
                Adventure Movies
              </div>
            </div>
          </div>
          <div className="mx-auto flex justify-center">
            <div>
              <div className="h-[500px] w-[500px]">
                <GreenFamily />
              </div>
              <div className="pt-2 text-center text-neutral-300">
                Family Movies
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const green_fantasy = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [9, 39, 14, 6],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const GreenFantasy = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: green_fantasy,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Fantasy";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const green_adventure = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [1, 47, 26, 11],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const GreenAdventure = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: green_adventure,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Adventure";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const green_family = {
  labels: ["Red", "Green", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [1, 19, 11, 10],
      backgroundColor: ["#dc26265a", "#16a34a5a", "#2563eb5a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#2563eb", "#eab308"],
    },
  ],
};

const GreenFamily = () => {
  const chartRef = useRef<any>(null);

  return (
    <canvas
      ref={(ctx) => {
        if (ctx) {
          // @ts-expect-error
          const chart = new Chart(ctx, {
            type: "polarArea",
            data: green_family,
            options: {
              elements: {
                line: {
                  borderWidth: 3,
                  borderColor: "rgba(113, 36, 213, 0.6)",
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                    title: (toolTipItem: any) => {
                      return "Family";
                    },
                    label: (toolTipItem: any) => {
                      return (
                        toolTipItem.label +
                        ": " +
                        toolTipItem.formattedValue +
                        " Movies"
                      );
                    },
                    labelColor: undefined,
                  },
                },
              },
              scales: {
                r: {
                  pointLabels: {
                    color: "#a3a3a3",
                    font: {
                      size: 14,
                      family: "Inter",
                    },
                  },
                  ticks: {
                    color: "#a3a3a3",
                    font: {
                      size: 12,
                      family: "Inter",
                    },
                    backdropColor: "rgba(0, 0, 0, 0)",
                  },
                  angleLines: {
                    color: "#525252",
                  },
                  grid: {
                    color: "#525252",
                  },
                },
              },
            },
          });

          chartRef.current = chart;
        } else {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        }
      }}
      id="age-chart-e2"
    ></canvas>
  );
};

const CTA = () => {
  return (
    <div className="min-h-screen border-t border-neutral-800 pb-40 pt-40">
      <div className="mx-auto max-w-5xl pb-6 text-center font-editorial text-4xl text-neutral-300">
        Designing your next movie poster?
      </div>

      <div className="mx-auto max-w-5xl text-lg text-neutral-300">
        <p>
          Here are some color palettes to get you started. Each color palette is
          inspired by the most popular genres on Letterboxd.
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between pt-4">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  Genre:
                </span>
                <span className="text-base text-neutral-400">
                  Horror, Mystery, Thriller, Romance
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-right text-base font-bold leading-tight">
                Associated Emotions:
              </span>
              <span className="text-right text-base text-neutral-400">
                Fear, Suspense, Tension, Danger, Love
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="aspect-square rounded-md bg-[#800011]"></div>
            <div className="aspect-square rounded-md bg-[#FF4D64]"></div>
            <div className="aspect-square rounded-md bg-[#FF0022]"></div>
            <div className="aspect-square rounded-md bg-[#802632]"></div>
            <div className="aspect-square rounded-md bg-[#CC001C]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <div className="flex justify-between pt-4">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  Genre:
                </span>
                <span className="text-base text-neutral-400">
                  Action, Sci-Fi, Drama, Thriller
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-right text-base font-bold leading-tight">
                Associated Emotions:
              </span>
              <span className="text-right text-base text-neutral-400">
                Excitement, Adventure, Mystery, Suspense
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="aspect-square rounded-md bg-[#93BAE5]"></div>
            <div className="aspect-square rounded-md bg-[#0477BF]"></div>
            <div className="aspect-square rounded-md bg-[#21394e]"></div>
            <div className="aspect-square rounded-md bg-[#0182C6]"></div>
            <div className="aspect-square rounded-md bg-[#0365A6]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <div className="flex justify-between pt-4">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  Genre:
                </span>
                <span className="text-base text-neutral-400">
                  Comedy, Drama, Romance, Crime
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-right text-base font-bold leading-tight">
                Associated Emotions:
              </span>
              <span className="text-right text-base text-neutral-400">
                Happiness, Excitement, Love, Intrigue
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="aspect-square rounded-md bg-[#731702]"></div>
            <div className="aspect-square rounded-md bg-[#8C4303]"></div>
            <div className="aspect-square rounded-md bg-[#BF700F]"></div>
            <div className="aspect-square rounded-md bg-[#F2AE2E]"></div>
            <div className="aspect-square rounded-md bg-[#F2D43D]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-4">
          <div className="flex justify-between pt-4">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight">
                  Genre:
                </span>
                <span className="text-base text-neutral-400">
                  Fantasy, Adventure, Family, Animation
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-right text-base font-bold leading-tight">
                Associated Emotions:
              </span>
              <span className="text-right text-base text-neutral-400">
                Wonder, Adventure, Joy, Bonding
              </span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="aspect-square rounded-md bg-[#025918]"></div>
            <div className="aspect-square rounded-md bg-[#03A61C]"></div>
            <div className="aspect-square rounded-md bg-[#012606]"></div>
            <div className="aspect-square rounded-md bg-[#02730A]"></div>
            <div className="aspect-square rounded-md bg-[#7BD96C]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Heading />
      <Introduction />

      <IntroPosters />
      <OutroPosters />

      <RedInfo />

      <BlueInfo />

      <YellowInfo />

      <GreenInfo />

      <CTA />
    </>
  );
};

export default Page;
