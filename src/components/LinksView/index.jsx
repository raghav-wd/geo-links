import update from "immutability-helper";
import EditLink from "../EditLink";
import { memo, useCallback, useState } from "react";
import { useDrop } from "react-dnd";

const LinksView = memo(function LinksView() {
  const style = {
    // width: 400,
  };
  const ITEMS = [
    {
      id: 1,
      name: "Vinay",
      link: "https://www.instagram.com/vin.vis_30/",
    },
    {
      id: 2,
      name: "Rishi",
      link: "https://www.instagram.com/mr._r_i_s_h_i_/",
    },
    {
      id: 3,
      name: "Raghav",
      link: "https://www.instagram.com/r.a.g.h.a._v/",
    },
  ];
  const [cards, setCards] = useState(ITEMS);
  const findCard = useCallback(
    (id) => {
      const card = cards.filter((c) => c.id === id)[0];
      return {
        card,
        index: cards.indexOf(card),
      };
    },
    [cards]
  );
  const moveCard = useCallback(
    (id, atIndex) => {
      const { card, index } = findCard(id);
      setCards(
        update(cards, {
          $splice: [
            [index, 1],
            [atIndex, 0, card],
          ],
        })
      );
    },
    [findCard, cards, setCards]
  );
  const [, drop] = useDrop(() => ({ accept: "Card" }));
  return (
    <div ref={drop} style={style}>
      {cards.map((c) => (
        <EditLink
          key={c.id}
          id={c.id}
          moveCard={moveCard}
          findCard={findCard}
          data={{ name: c.name, link: c.link }}
        />
      ))}
    </div>
  );
});
export default LinksView;
