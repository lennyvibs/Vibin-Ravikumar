interface VideoBackgroundProps {
  src: string;
  opacity?: string;
  tint?: boolean;
}

export default function VideoBackground({
  src,
  opacity = "opacity-30",
  tint = false,
}: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`w-full h-full object-cover ${opacity}`}
      >
        <source src={src} type="video/mp4" />
      </video>
      {tint && <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />}
    </div>
  );
}
