import axios from "axios";
import React, { useEffect } from "react";

const QuickViewPoke = ({ url }: { url: string }) => {
  const [pokemon, setPokemon] = React.useState<any>({});
  // const [loading, setLoading] = React.useState<boolean>(true);
  const fetchDescription = async (url: string) => {
    try {
      const response = await axios({
        method: "GET",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPokemon(response.data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //eslint-disable-next-line
  useEffect(() => {
    fetchDescription(url);
  }, [url]);
  return (
    <div>
      <div className="relative z-10" role="dialog" aria-modal="true">
        <pre>{JSON.stringify(pokemon)}</pre>
      </div>
    </div>
  );
};

export default QuickViewPoke;
