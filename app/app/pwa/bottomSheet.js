'use client'
import { useEffect, useState } from 'react';

export default function BottomSheet() {
    const [startY, setStartY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [bottomSheetStyle, setBottomSheetStyle] = useState({});

    useEffect(() => {
        function handleTouchStart(event) {
            setStartY(event.touches[0].clientY);
            setIsDragging(true);
        }

        function handleTouchMove(event) {
            if (!isDragging) return;

            const deltaY = event.touches[0].clientY - startY;
            if (deltaY > 0) {
                setBottomSheetStyle({ bottom: `-${deltaY}px` });
            }
        }

        function handleTouchEnd(event) {
            if (!isDragging) return;

            setIsDragging(false);
            const deltaY = event.changedTouches[0].clientY - startY;
            if (deltaY > 100) {
                setBottomSheetStyle({ bottom: '-100%' });
            } else {
                setBottomSheetStyle({ bottom: '0' });
            }
        }

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, startY]);

    return (
        <div className="bottom-sheet" style={bottomSheetStyle}>
            <div className="handle"></div>
            <div className="bottom-sheet-content">

            </div>
        </div>
    );
}
