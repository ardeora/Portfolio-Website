import { useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { BackgroundGradientAnimation } from "./BGGradient";

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
        Have you ever noticed how a movie can make you feel uneasy, inspired,
        ornostalgic without a single word being spoken? That’s the magic of
        color. Filmmakers are masterful at using color palettes to set the mood
        andevoke emotions, whether it’s the warm, golden hues of a heartfelt
        dramaor the cold, desaturated tones of a gritty thriller. One moment
        thatstuck with me was watching La La Land for the first time, its
        vibrant blues, yellows, and reds felt like a visual symphony, perfectly
        echoingthe highs and lows of the characters' emotions. It’s incredible
        how acarefully chosen palette can turn a simple scene into
        somethingunforgettable.
      </div>

      <div className="mx-auto max-w-5xl text-xl leading-snug text-neutral-300">
        But the artistry of color doesn't end with the films themselves.
        Filmmakers also harness the power of color in movie posters to convey
        themes and genres even before the first scene unfolds. That's right, the
        colors in movie posters are carefully chosen to evoke emotions and give
        you a glimpse into the movie's essence. In this presentation, we'll
        delve into how the hues and shades on these posters communicate meaning
        and set the stage for what's to come.
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
    <div className="mt-[75vh] h-screen bg-red-950">
      <div className="mx-auto max-w-5xl"></div>
    </div>
  );
};

const RedInfo = () => {
  return (
    <div>
      <div className="relative">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(185, 28, 28)"
          gradientBackgroundEnd="rgb(225, 29, 72)"
          interactive={false}
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center font-editorial text-8xl tracking-wide">
          <div>Red Posters</div>
          <div className="pt-2 font-sans text-3xl font-light uppercase tracking-[0.3em] text-neutral-300">
            Color Analysis
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="pb-4 text-center font-editorial text-3xl">
            Poster Color Palette Fingerprint
          </div>

          <div className="relative">
            <img src="/imgs/tswd/a6/joined-red.png" alt="Movie Poster" />
            <div className="absolute inset-0 bg-red-500/20 mix-blend-color-burn"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="pt-20">
          <div className="pb-4 text-center font-editorial text-3xl">
            Top Genres in Red Movie Posters
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
          <div className="pb-12 text-center font-editorial text-3xl">
            Genres Dominated by Red Movie Posters
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
      backgroundColor: ["#dc26265a", "#16a34a5a", "#0284c75a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#0284c7", "#eab308"],
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
      backgroundColor: ["#dc26265a", "#16a34a5a", "#0284c75a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#0284c7", "#eab308"],
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
      backgroundColor: ["#dc26265a", "#16a34a5a", "#0284c75a", "#eab3085a"],
      borderColor: ["#dc2626", "#16a34a", "#0284c7", "#eab308"],
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

const Page = () => {
  return (
    <>
      <Heading />

      <Introduction />

      <IntroPosters />
      <OutroPosters />

      <RedInfo />
    </>
  );
};

export default Page;
