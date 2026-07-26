import React, { useMemo } from 'react';
import StarRating from '../ui/StarRating';

const ReviewComponent = ({ reviews = [], productRating = 0, totalReviews = 0 }) => {
  // Compute rating distribution (count of each star rating)
  const distribution = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => {
      const star = Math.round(r.rating); // round to nearest integer
      if (star >= 1 && star <= 5) counts[star] = (counts[star] || 0) + 1;
    });
    return counts;
  }, [reviews]);

  const maxCount = Math.max(...Object.values(distribution), 1);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Generate avatar URL from DiceBear
  const getAvatar = (seed) => {
    return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(seed)}`;
  };

  return (
    <div className="mt-8 border-t border-gray-700 pt-6">
      <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Courier New' }}>
        Customer Reviews
      </h2>

      {/* Overall Rating Summary */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">{productRating.toFixed(1)}</span>
          <div className="flex flex-col">
            <StarRating rating={productRating} readOnly={true} />
            <span className="text-sm text-gray-400">{totalReviews} reviews</span>
          </div>
        </div>

        {/* Distribution bars */}
        <div className="flex-1 w-full sm:w-auto space-y-1">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = distribution[star] || 0;
            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            return (
              <div key={star} className="flex items-center gap-2 text-sm">
                <span className="text-gray-400 w-6 text-right">{star}★</span>
                <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-gray-400 w-8 text-left">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.length === 0 ? (
          <p className="text-gray-400">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-6 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <img
                  src={getAvatar(review.reviewerName || review.reviewerEmail || index)}
                  alt={review.reviewerName}
                  className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-semibold text-white">
                      {review.reviewerName || 'Anonymous'}
                    </span>
                    <StarRating rating={review.rating} readOnly={true} />
                    <span className="text-sm text-gray-400">
                      {formatDate(review.date)}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1 text-sm leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;