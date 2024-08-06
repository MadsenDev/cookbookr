import React, { useState } from 'react';
import { timeSince, getProfilePictureUrl } from '../../utils/helpers';

const RecipeComments = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>
      <form onSubmit={handleAddComment} className="mb-6 flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-primary focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-300"
        >
          Add
        </button>
      </form>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
            <img src={getProfilePictureUrl(comment.profilePicture, comment.gender)} alt={`${comment.firstName} ${comment.lastName}`} className="w-12 h-12 rounded-full mr-4" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-gray-900">{`${comment.firstName} ${comment.lastName}`}</p>
                <p className="text-sm text-gray-500">{timeSince(comment.created_at)}</p>
              </div>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeComments;