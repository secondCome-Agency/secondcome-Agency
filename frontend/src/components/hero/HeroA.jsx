import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero-a.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroA({
    ctaHref = '#about',
    ctaLabel = 'Discover SecondCome',
    cornerElement = null, // Can be custom React element or null for pure luxury minimalist space
}) {
    const root = useRef(null);

    useLayoutEffect(() => {
        // matchMedia = reduced-motion support + automatic cleanup of every tween/trigger
        const mm = gsap.matchMedia(root);

        mm.add('(prefers-reduced-motion: no-preference)', () => {
            // ---- Intro timeline ----
            const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
            tl.from('.sc-l1>span,.sc-l2>span', { yPercent: 112, duration: 1.3, stagger: 0.12 }, 0.1)
                .from('.sc-l3>span', { yPercent: 112, duration: 1.3 }, 0.4)
                .from('.sc-stand>span', { yPercent: 112, duration: 1.3 }, 0.55)
                .fromTo(
                    '.sc-slab',
                    { clipPath: 'inset(100% 0 0 0)' },
                    { clipPath: 'inset(0% 0 0 0)', duration: 1.3, ease: 'power4.inOut', clearProps: 'clipPath' },
                    0.5
                )
                .from('.sc-out>span', { yPercent: 112, duration: 1.2 }, 1.3)
                .from('.sc-sup,.sc-top,.sc-foot,.sc-s-top', { opacity: 0, y: 14, duration: 0.9, stagger: 0.1 }, 1.1);

            // Intro animation for optional corner element
            if (cornerElement) {
                tl.from('.sc-corner-wrap', { opacity: 0, scale: 0.92, y: 16, duration: 1.1, ease: 'power3.out' }, 0.7);

                // Subtle pointer parallax on the corner element
                const cornerX = gsap.quickTo('.sc-corner-wrap', 'x', { duration: 1.2 });
                const cornerY = gsap.quickTo('.sc-corner-wrap', 'y', { duration: 1.2 });
                const onMove = (e) => {
                    const x = e.clientX / window.innerWidth - 0.5;
                    const y = e.clientY / window.innerHeight - 0.5;
                    cornerX(x * 12);
                    cornerY(y * 12);
                };
                window.addEventListener('pointermove', onMove);
                var cleanupMove = () => window.removeEventListener('pointermove', onMove);
            }

            // ---- Pinned scroll transition: slab expands, typography shifts ----
            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: 'top top',
                    end: '+=110%',
                    scrub: 0.7,
                    pin: true,
                },
            });

            scrollTl
                .to('.sc-slab', { left: 0, top: 0, duration: 1, ease: 'none' }, 0)
                .to(root.current, { '--ink': '#DDF3E8', duration: 0.35, ease: 'none' }, 0.45)
                .to('.sc-l1,.sc-l2,.sc-l3,.sc-sup', { xPercent: -14, duration: 1, ease: 'none' }, 0)
                .to('.sc-l1,.sc-l2,.sc-l3,.sc-sup', { autoAlpha: 0, duration: 0.25, ease: 'none' }, 0.75);

            if (cornerElement) {
                scrollTl.to('.sc-corner-wrap', { opacity: 0, y: '-8vh', duration: 0.65, ease: 'none' }, 0);
            }

            return () => {
                if (cleanupMove) cleanupMove();
            };
        });

        return () => mm.revert();
    }, [cornerElement]);

    return (
        <section className="sc-hero" ref={root}>
            <div className="sc-top sc-lab">
                <span>Digital marketing & creative agency</span>
            </div>

            {cornerElement && (
                <div className="sc-corner-wrap">
                    {cornerElement}
                </div>
            )}

            <h1 className="sc-sr">Not here to blend in. Here to stand out.</h1>

            <div className="sc-stack" aria-hidden="true">
                <span className="sc-ln sc-l1 sc-big"><span>Not here</span></span>
                <span className="sc-ln sc-l2 sc-big"><span>to blend in.</span></span>
                <p className="sc-sup">We make brands impossible to overlook.</p>
                <span className="sc-ln sc-l3 sc-big"><span>Here to</span></span>
            </div>

            <span className="sc-ln sc-stand sc-big" aria-hidden="true"><span>Stand</span></span>

            <div className="sc-slab">
                <div className="sc-s-top sc-lab">
                    <span>Strategy / creativity / technology</span>
                    <a className="sc-cta" href={ctaHref}>
                        {ctaLabel} <span>→</span>
                    </a>
                </div>
                <span className="sc-ln sc-out sc-big" aria-hidden="true"><span>Out.</span></span>
            </div>

            <div className="sc-foot sc-lab">SecondCome</div>
        </section>
    );
}
