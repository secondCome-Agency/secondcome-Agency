// The SC Transformation Mark: incomplete ring + open frame + three lines + offset square.
// Classes are used by HeroA's GSAP timelines.
export default function ScMark({ className = '' }) {
    return (
        <svg
            className={`sc-mark ${className}`}
            viewBox="0 0 200 200"
            aria-hidden="true"
        >
            <path
                className="sc-frame"
                d="M14 14 H186 V186 H14"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
            />
            <g className="sc-ring">
                <circle
                    className="sc-spin"
                    cx="100"
                    cy="100"
                    r="64"
                    fill="none"
                    stroke="#36A6A3"
                    strokeWidth="16"
                    strokeDasharray="290 112"
                />
            </g>
            <g className="sc-lines" stroke="currentColor" strokeWidth="3">
                <line x1="68" y1="86" x2="132" y2="86" />
                <line x1="68" y1="100" x2="132" y2="100" />
                <line x1="68" y1="114" x2="132" y2="114" />
            </g>
            <rect className="sc-sq" x="150" y="150" width="34" height="34" fill="#36A6A3" />
        </svg>
    );
}