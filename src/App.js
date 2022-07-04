import { Player } from "@remotion/player/dist/Player";
import React from "react";
import { HelloWorld } from "./HelloWorld";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Player
        component={HelloWorld}
        durationInFrames={2000}
        compositionWidth={1280}
        compositionHeight={720}
        fps={30}
        controls
        style={{
          maxWidth: 700,
          maxHeight: 400,
        }}
      />
    </div>
  );
};

export default App;
