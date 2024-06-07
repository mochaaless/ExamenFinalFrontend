import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div class="video-detail-container">
      <a href="/videos" class="back-button">← Go Back to List</a>
      <div class="video-frame">
        <iframe 
          width="100%" 
          height="400px" 
          src="https://www.youtube.com/embed/0GuSxDagyVk" 
          title="Curso Deno Fresh - Video 1" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          >
        </iframe>
      </div>
      <h2 class="video-detail-title">Curso Deno Fresh - Video 1</h2>
      <p class="video-detail-description">Introduction to Deno Fresh</p>
      </div>
  )
}
