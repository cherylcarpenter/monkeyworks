export function Hero({ children, className, image }) {
    return (
        <div className={['myHero font-roboto', className].join(' ')} style={{ backgroundImage: `url(${image})` }}>
            {children}
        </div>
    );
}
