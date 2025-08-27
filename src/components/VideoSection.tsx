import React from "react";

type Props = {
  /** Ссылка на youtube/vimeo или mp4. Если не передана — покажем плейсхолдер. */
  src?: string;
};

export default function VideoSection({ src }: Props) {
  return (
    <section className="section" id="video" aria-labelledby="video-title">
      <div className="container">
        <h2 className="section-title" id="video-title">
          Семинар по питанию
        </h2>
        <p className="section-sub">
          Алан Нильсон, профессиональный футболист, рассказывает о важности
          профилактики заболеваний и о том, как ежедневный выбор продуктов
          влияет на здоровье. Он подчеркивает необходимость get fit и здорового
          питания для предотвращения ожирения и диабета 2 типа. Вы узнаете,
          почему стоит выбирать полезную еду.
        </p>
        <div className="video" role="region" aria-label="Видео-презентация">
          {src ? (
            src.endsWith(".mp4") ? (
              <video
                controls
                poster="https://placehold.co/1280x720/png?text=Видео"
              >
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <iframe
                src={src}
                title="Видео-презентация"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )
          ) : (
            <img
              src="https://placehold.co/1280x720/png?text=Видео+о+продукции"
              alt="Плейсхолдер для видео"
            />
          )}
        </div>
      </div>
    </section>
  );
}
