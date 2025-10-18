import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    // Format date nicely
    const publishedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        { year: "numeric", month: "long", day: "numeric" }
    );

    return (
        <div className="card border rounded-lg shadow-md p-4 bg-base-100">
            {/* Author Section */}
            <div className="flex items-center justify-between border-b pb-3 mb-3">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">{publishedDate}</p>
                    </div>
                </div>

                {/* Share Icon */}
                <button className="btn btn-ghost btn-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M8 8l8 8M8 16l8-8"
                        />
                    </svg>
                </button>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-3">{title}</h2>

            {/* Image */}
            <figure className="mb-3">
                <img
                    src={thumbnail_url}
                    alt="thumbnail"
                    className="w-full h-52 object-cover rounded-lg"
                />
            </figure>

            {/* Details */}
            <p className="text-sm text-gray-600 mb-2">
                {details.slice(0, 180)}...{" "}
                <span className="text-orange-500 font-semibold cursor-pointer">
                    Read More
                </span>
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, i) => (
                    <span
                        key={i}
                        className="badge badge-outline text-xs font-medium capitalize"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3">
                <div className="flex items-center text-orange-500">
                    {[...Array(rating.number)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-2 text-gray-700 font-semibold">
                        {rating.number}
                    </span>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                    <FaEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
