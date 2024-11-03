gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".header-titles").forEach((heading) => {
  gsap.fromTo(
    heading,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    }
  );
});
