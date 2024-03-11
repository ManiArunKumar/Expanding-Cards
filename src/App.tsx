import { useState } from 'react';
import './App.css';

function App() {
  const [cardProps, setCardProps] = useState({
    cardData: [
      {
        imgUrl:
          'https://images.unsplash.com/photo-1708348244831-07e906ded4ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'First Image',
        isActive: true,
      },
      {
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Second Image',
        isActive: false,
      },
      {
        imgUrl:
          'https://images.unsplash.com/photo-1708924674133-84198ccafde9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Third Image',
        isActive: false,
      },
      {
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1674326713405-06b44b439013?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Fourth Image',
        isActive: false,
      },
      {
        imgUrl:
          'https://plus.unsplash.com/premium_photo-1709143099855-0fa88e8a6ac3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: 'Fifth Image',
        isActive: false,
      },
    ],
  });

  function handleClick(index: number) {
    const modifiedData = [...cardProps?.cardData];
    modifiedData.forEach((e, idx) => {
      if (index === idx) {
        e.isActive = true;
      } else {
        e.isActive = false;
      }
    });
    setCardProps({ ...cardProps, cardData: modifiedData });
  }

  return (
    <div className="container">
      {cardProps?.cardData?.length &&
        cardProps?.cardData?.map((card, index) => {
          return (
            <div
              style={{ backgroundImage: `url(${card.imgUrl})` }}
              className={`panel ${card?.isActive ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <h3>{card.text}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
