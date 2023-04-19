import React from "react";
import "../TodoLoading/TodoLoading.css";

function TodoLoading() {
  return (
    <span className="EmptyContainer">
      <p className="LoadingText">No desesperes.... estamos cargando</p>
    </span>
  );
}

export { TodoLoading };
