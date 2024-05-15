import React, { useState } from 'react';
import {
  useTailwind,
  Button,
  Flex,
  Box,
  Text,
  Link,
} from '@tailwind/react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const tailwind = useTailwind();

  return (
    <div>
      <Button
        onClick={handleOpenMenu}
        className={tailwind('bg-gray-200 p-2 rounded-md')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Button>
      {isOpen && (
        <Flex
          className={tailwind('fixed top-0 left-0 w-full h-full bg-gray-900 z-50')}
          onClick={handleCloseMenu}
        >
          <Box
            className={tailwind(
              'flex flex-col justify-center items-center w-full h-full'
            )}
          >
            <Text
              className={tailwind('text-white text-4xl font-bold mb-4')}
            >
              Menú
            </Text>
            <Link
              href="/"
              className={tailwind('text-white text-2xl mb-2')}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className={tailwind('text-white text-2xl mb-2')}
            >
              Sobre mí
            </Link>
            <Link
              href="/contact"
              className={tailwind('text-white text-2xl mb-2')}
            >
              Contacto
            </Link>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default HamburgerMenu;
