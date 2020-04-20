import React, {useState} from "react";

export default function useMyErrorMessage(): { component?: JSX.Element; showError: (error: string | undefined) => void } {
  const [error, showError] = useState<string | undefined>(undefined);
  const component = error ? <div style={{color: 'red', border: '1px solid red'}}>{error}</div> : undefined;
  return {
    component,
    showError: (error) => showError(error)
  }
}
