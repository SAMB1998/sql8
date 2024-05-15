document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var elementTarget = document.getElementById("about");
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - window.innerHeight)) {
            document.querySelectorAll('.progress-bar').forEach(function(el) {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
            });
        }
    });
});
import React, { useState, useEffect } from 'react';
import Profile from './Profile';

function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Profile profile={profile} />
    </div>
  );
}

export default App;
