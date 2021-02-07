import React from 'react';
import NextLink from 'next/link';

import PropTypes from 'prop-types';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

Link.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
