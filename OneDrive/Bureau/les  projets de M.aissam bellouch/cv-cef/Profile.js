import React from 'react';

function Profile({ profile }) {
  return (
    <div className="profile">
      <img src={profile.avatar_url} alt="avatar" style={{ width: '150px', borderRadius: '50%' }} />
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      <p>
        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
          {profile.html_url}
        </a>
      </p>
      <p>Followers: {profile.followers}</p>
      <p>Following: {profile.following}</p>
      <p>Public Repos: {profile.public_repos}</p>
    </div>
  );
}

export default Profile;
