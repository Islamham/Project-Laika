
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=GMZPrWuguDg)

[![Watch This!](https://img.youtube.com/vi/GMZPrWuguDg/1.jpg)](https://www.youtube.com/watch?v=GMZPrWuguDg)


# Project Laika 🌍

**Project Laika** (named after the first dog in space) is an interactive, AI-driven web application developed for NASA's Space Apps Challenge 2024. Designed under the **"Tell Us a Climate Story"** challenge, this application uses real-time data to tell engaging and fictionalized climate stories about various regions on Earth. Users can explore an interactive Earth model, click on a region, and reveal a story inspired by climate data, illustrating the impact of climate change on the flora, fauna, and environment in that area.

![Screencap1](https://github.com/user-attachments/assets/dd593ae3-ee16-43c5-8904-296e38ac967c)
![Screencap2](https://github.com/user-attachments/assets/3e796ef0-c56f-4f36-ae68-49068972622e)

## 🌟 Features

- **Interactive 3D Earth Model**: Users are greeted with a 3D model of Earth. Clicking on a region brings up a unique, story-driven experience inspired by climate data.
- **AI-Generated Climate Stories**: The app generates vivid narratives that personify animals, plants, and communities, showcasing their experiences and struggles amidst climate change through engaging storytelling.
- **Dynamic and Data-Driven**: Integrating APIs like OpenWeather and GBIF, the app combines real-time climate and biodiversity data into each story, blending factual insights with fictional elements to create impactful stories.

## 📚 Tech Stack

- **Frontend**: React with 3D rendering powered by Three.js and react-three-fiber.
- **Backend**: Next.js for API handling and data integration.
- **AI Models**: Eleven Labs for voice synthesis and Gemini models via Google Cloud's Vertex AI for story generation.
- **Hosting**: Vercel, for seamless and rapid deployment.

## 🛠 How It Works

1. **Overlay Components**:
   - **TitleOverlay.js**: Users interact with the TitleOverlay component to start the application.
   - **MainOverlay.js**: Once started, the MainOverlay component displays the main content overlay with the generated story.

2. **Location Hook (useLocationData.js)**:
   - The `useLocationData` hook fetches story data based on the user's selected location.
   - It makes a request to the RESTful API endpoint `/api/story/[lat],[lon]`.

3. **API Endpoint (route.js)**:
   - The RESTful API endpoint `/api/story/[lat],[lon]` handles the GET request.
   - It calls the `generateStory` function from `server/story.js` to generate the story.

4. **Utility Functions (server.js files)**:
   - The `generateStory` function utilizes utility functions from:
     - `server/openweather.js`
     - `server/animals.js`
     - `server/vertex.js`
     - `server/TextToSpeech.js`
   - These modules fetch necessary data and combine it to create the story.


## 📈 Future Enhancements

- **Enhanced Data Visualizations**: Introduce animations that visually represent climate data trends, such as temperature changes, precipitation levels, or biodiversity shifts over time. This will allow users to gain a more dynamic understanding of the climate impact through visual storytelling.

- **Regional Photos**: Display real images of the area clicked, providing users with visual context and a closer connection to each story. These images could include landscapes, local flora and fauna, or any significant geographical features to enrich the narrative experience.

- **Zoom and Pan Features**: Add zoom and pan capabilities to the Earth model, allowing users to focus on specific regions and get a closer look at areas of interest. This feature would make exploring the 3D model more interactive and allow for detailed inspection of each story's geographic context.

- **Audio Narration for Stories**: Enable audio playback for each story, utilizing Eleven Labs for realistic, AI-generated narration, providing users with an immersive auditory experience as they explore.

- **User-Driven Story Customization**: Allow users to adjust narrative elements, like choosing the type of character (e.g., plant, animal, or human) featured in the story, making each interaction more personalized and engaging.


## 👥 Team

### Backend Team
- **Hamza**: Developed AI-Generated Climate Stories feature with API data integration for context and seamless front-end delivery.
- **Vassily**: Focuses on data handling and API endpoints, connecting the application to real-time climate and biodiversity data.
- **Vidit**: Specializes in data visualization, creating animations and visual elements to represent climate data dynamically.
- **Paige**: Leads backend integrations and API handling, streamlining the flow of data to enhance the storytelling experience.

### Frontend Team
- **Jesse**: Develops the landing page and the user interface for the "Stories" feature, providing an intuitive and seamless experience for users.
- **Tyson**: Works on implementing 3JS for 3D rendering and interactions, creating the immersive Earth model and interactive elements.
