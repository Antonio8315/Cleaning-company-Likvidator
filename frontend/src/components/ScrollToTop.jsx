// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Скролимо вікно на самий початок (координати 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Ефект спрацьовує щоразу, коли змінюється шлях (сторінка)

  return null; // Цей компонент нічого не малює на екрані, він просто виконує логіку
}