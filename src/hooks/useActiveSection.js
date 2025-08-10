import { useEffect, useState } from 'react';

export default function useActiveSection(sectionIds = [], offsetPx = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] || null);

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = visible[0].target.id;
          if (id === 'stats') {
            setActiveId('nosotros');
          } else if (id === 'expertos') {
            setActiveId('contactanos');
          } else {
            setActiveId(id);
          }
        }
      },
      {
        root: null,
        rootMargin: `-${offsetPx}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [JSON.stringify(sectionIds), offsetPx]);

  return activeId;
}
