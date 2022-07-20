export const size = {
    s: 480,
    sm: 768,
    m: 992,
    l: 1200,
    xl: 1440,
};

export const device = {
    s: `(max-width: ${size.s-1}px)`,
    sm: `(min-width: ${size.s}px) and (max-width: ${size.sm-1}px)`,
    tablet: `(min-width: ${size.sm}px) and (max-width: ${size.m-1}px)`,
    landscapeTablets: `(min-width: ${size.m}px) and (max-width: ${size.l-1}px)`,
    l: `(min-width: ${size.l}px) and (max-width: ${size.xl-1}px)`,
    xl: `(min-width: ${size.xl}px)`
};