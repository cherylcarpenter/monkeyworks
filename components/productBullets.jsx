import Link from 'next/link';

export function ProductBullets({ children, className, bulletOne, bulletTwo, bulletThree, bulletFour, image }) {
    return (
        <div
            className={`productBullets flex content-center items-center flex-wrap w-full justify-center gap-6 ${className}`}
        >
            <div className="leftCol col">
                <div className="text-xl productBullet">
                    {' '}
                    <Link href="/about">
                        <span className="bg-primary mr-3 p-2 font-bold text-2xl text-center text-white bulletNumber">
                            1
                        </span>{' '}
                        {bulletOne}
                    </Link>
                </div>
                <div className="text-xl productBullet">
                    {' '}
                    <Link href="/about">
                        <span className="bg-primary mr-3 p-2 font-bold text-2xl text-center text-white bulletNumber">
                            3
                        </span>{' '}
                        {bulletThree}
                    </Link>
                </div>
            </div>
            <img className="productFeature" src={image} alt="" />
            <div className="rightCol col">
                <div className="text-xl productBullet">
                    <Link href="/about">
                        {bulletTwo}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-2xl text-center text-white bulletNumber">
                            2
                        </span>
                    </Link>{' '}
                </div>
                <div className="text-xl productBullet">
                    <Link href="/about">
                        {bulletFour}{' '}
                        <span className="bg-primary ml-3 p-2 font-bold text-2xl text-center text-white bulletNumber">
                            4
                        </span>
                    </Link>{' '}
                </div>
            </div>
        </div>
    );
}
