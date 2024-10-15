-- Titles Table
CREATE TABLE
  Titles (
    id SERIAL PRIMARY KEY,
    title_name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(20) CHECK (
      type IN ('Manga', 'Manhwa', 'Webtoon')
    ),
    status VARCHAR(20) CHECK (status IN ('Ongoing', 'Completed')),
    cover_image_url VARCHAR(255),
    release_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

-- Genres Table
CREATE TABLE
  Genres (
    id SERIAL PRIMARY KEY,
    genre_name VARCHAR(100) NOT NULL UNIQUE
  );

-- TitleGenres Table
CREATE TABLE
  TitleGenres (
    title_id INTEGER REFERENCES Titles (id),
    genre_id INTEGER REFERENCES Genres (id),
    PRIMARY KEY (title_id, genre_id)
  );

-- Authors Table
CREATE TABLE
  Authors (
    id SERIAL PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    bio TEXT,
    profile_image_url VARCHAR(255)
  );

-- TitleAuthors Table
CREATE TABLE
  TitleAuthors (
    title_id INTEGER REFERENCES Titles (id),
    author_id INTEGER REFERENCES Authors (id),
    PRIMARY KEY (title_id, author_id)
  );

-- Chapters Table
CREATE TABLE
  Chapters (
    id SERIAL PRIMARY KEY,
    title_id INTEGER REFERENCES Titles (id),
    chapter_number INTEGER NOT NULL,
    chapter_title VARCHAR(255),
    release_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

-- ContentCreators Table
CREATE TABLE
  ContentCreators (
    id SERIAL PRIMARY KEY,
    creator_name VARCHAR(255) NOT NULL,
    channel_url VARCHAR(255),
    profile_image_url VARCHAR(255),
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

-- YouTubeRecaps Table
CREATE TABLE
  YouTubeRecaps (
    id SERIAL PRIMARY KEY,
    title_id INTEGER REFERENCES Titles (id),
    chapter_id INTEGER REFERENCES Chapters (id),
    creator_id INTEGER REFERENCES ContentCreators (id),
    video_title VARCHAR(255) NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    video_thumbnail_url VARCHAR(255),
    published_at TIMESTAMP,
    duration INTEGER,
    views_count INTEGER,
    likes_count INTEGER,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
