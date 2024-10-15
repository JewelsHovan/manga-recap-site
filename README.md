# MangaRecap

MangaRecap is a web platform that connects fans of manga, manhwa, and webtoons with engaging YouTube recaps. Our mission is to enhance the fan experience by bridging the gap between written narratives and visual storytelling.

## Features

- **Discover Trending Recaps**: Browse the latest and most popular recaps of your favorite titles.
- **Real-time Search**: Find manga, manhwa, or webtoon recaps instantly with our dynamic search functionality.
- **Content Creator Showcase**: Explore and connect with content creators who produce high-quality recaps.
- **Responsive Design**: Enjoy a seamless experience across all devices and screen sizes.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase Account
  - Sign up at [Supabase](https://supabase.io) to get your API keys.

### Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/yourusername/mangarecap.git
   cd mangarecap
   ```

2. Install Dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set Up Environment Variables

   Create a `.env.local` file in the root directory and add your Supabase credentials:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the Development Server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure

- `src/components/`: Reusable React components like `Header`, `Footer`, `RecapCard`, `SearchBar`, etc.
- `src/app/`: Next.js pages including `homepage`, `about`, `recaps`, `content-creators`, etc.
- `src/utils/`: Utility functions and Supabase client setup.
- `src/lib/`: Common library code such as custom hooks and context providers.
- `public/`: Static assets like images and icons.

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Open a pull request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please reach out to us at [contact@mangarecap.com](mailto:contact@mangarecap.com).

---

**Note:** This project is continually evolving. Stay tuned for more exciting features!