const _SERVER = "http://localhost:3000/";

// default type of image source tree
type ImgSrcTree = {
  [key in string]: string | ImgSrcTree;
};

const logos = {
  logo: "assets/shared/desktop/logo.svg",
  hamburgerIcon: "assets/shared/tablet/icon-hamburger.svg",
  cartIcon: "assets/shared/desktop/icon-cart.svg",
  arrowIcon: "assets/shared/desktop/icon-arrow-right.svg",
  circlePattern: "assets/home/desktop/pattern-circles.svg",
  iconFacebook: "assets/shared/desktop/icon-facebook.svg",
  iconTwitter: "assets/shared/desktop/icon-twitter.svg",
  iconInstagram: "assets/shared/desktop/icon-instagram.svg",
};

const images = {
  ...logos,
  header: {
    mobile: "assets/home/mobile/image-header.jpg",
    tablet: "assets/home/tablet/image-header.jpg",
    desktop: "assets/home/desktop/image-header.jpg",
  },
  speakerZX9: {
    mobile: "assets/home/mobile/image-speaker-zx9.png",
    tablet: "assets/home/table/image-speaker-zx9.png",
    desktop: "assets/home/desktop/image-speaker-zx9.png",
  },
  speakerZX7: {
    mobile: "assets/home/mobile/image-speaker-zx7.jpg",
    tablet: "assets/home/tablet/image-speaker-zx7.jpg",
    desktop: "assets/home/desktop/image-speaker-zx7.jpg",
  },
  earphonesYX1: {
    mobile: "assets/home/mobile/image-earphones-yx1.jpg",
    tablet: "assets/home/tablet/image-earphones-yx1.jpg",
    desktop: "assets/home/desktop/image-earphones-yx1.jpg",
  },
  bestGear: {
    mobile: "assets/shared/mobile/image-best-gear.jpg",
    tablet: "assets/shared/tablet/image-best-gear.jpg",
    desktop: "assets/shared/desktop/image-best-gear.jpg",
  },
  categoryThumbnail: {
    earphones: "assets/shared/desktop/image-category-thumbnail-earphones.png",
    speakers: "assets/shared/desktop/image-category-thumbnail-speakers.png",
    headphones: "assets/shared/desktop/image-category-thumbnail-headphones.png",
  },
};

// Go through image source tree and replace every link with server prefix
const applyPrefix = (sources: ImgSrcTree) => {
  Object.entries(sources).forEach(([key, value]) => {
    if (typeof value === "string") {
      sources[key] = _SERVER + value;
    } else {
      applyPrefix(value);
    }
  });

  return sources as typeof images;
};

export default applyPrefix(images);
