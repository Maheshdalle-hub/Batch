import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const subjects = [
  { name: 'Maths', api: 'maths' },
  { name: 'Physics', api: 'phy' },
  { name: 'Chemistry', api: 'chem' },
  { name: 'Biology', api: 'bio' }
];

// Define where to start for each subject
const subjectFilters = {
  Physics: 'Motion in a Straight Line L3',
  Chemistry: 'Some Basic Concepts of Chemistry L1',
  Maths: 'Real Numbers L1',
  Biology: 'The Living World L1'
};

const LecturesPage11 = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchLectures = async (api, name) => {
    setLoading(true);
    try {
      const res = await fetch(`https://automate-eduvibe-nt11.wasmer.app/?api=${api}`);
      const data = await res.json();

      const marker = subjectFilters[name];
      const startIndex = data.findIndex(item => item.name === marker);
      const filteredLectures = startIndex !== -1 ? data.slice(startIndex) : data;

      setLectures(filteredLectures);
      setSelectedSubject(name);
    } catch (err) {
      alert("Failed to fetch lectures.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectClick = (subject) => {
    fetchLectures(subject.api, subject.name);
  };

  const goToVideo = (index) => {
    navigate(`/video/11/${selectedSubject}/${index}`, {
      state: {
        m3u8Url: lectures[index].m3u8Url,
        notesUrl: lectures[index].notesUrl,
        title: lectures[index].name
      }
    });
  };

  const handleBack = () => {
    setSelectedSubject(null);
    setLectures([]);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        padding: 20
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');`}
      </style>

      {!selectedSubject && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {subjects.map((subject) => (
            <div
              key={subject.api}
              onClick={() => handleSubjectClick(subject)}
              style={{
                background: '#1f1f1f',
                padding: 30,
                textAlign: 'center',
                borderRadius: 12,
                fontSize: 20,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {subject.name}
            </div>
          ))}
        </div>
      )}

      {selectedSubject && (
        <div>
          <button
            onClick={handleBack}
            style={{
              marginBottom: 20,
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            ← Back
          </button>

          <h2 style={{ fontWeight: 600 }}>{selectedSubject} Lectures</h2>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div>
              {lectures.map((lecture, index) => (
                <div
                  key={index}
                  onClick={() => goToVideo(index)}
                  style={{
                    marginBottom: 12,
                    padding: 15,
                    backgroundColor: '#1e1e1e',
                    borderRadius: 10,
                    border: '1px solid #333',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    fontWeight: 500
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#292929')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#1e1e1e')}
                >
                  {lecture.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LecturesPage11;
