import color from './color'

const grommetTheme = {
  global: {
    defaultMode: 'light',
    rounding: 10,
    spacing: 24,
    name: 'Prescient Theme',
    colors: {
      icon: {
        '0': '#',
        '1': '6',
        '2': '6',
        '3': '6',
        '4': '6',
        '5': '6',
        '6': '6',
        dark: '#f8f8f8',
        light: '#666666',
      },
      active: 'rgba(221,221,221,0.5)',
      black: '#000000',
      border: {
        dark: 'rgba(255,255,255,0.33)',
        light: 'rgba(0,0,0,0.33)',
      },
      brand: color.highlight,
      control: {
        dark: 'accent-1',
        light: 'brand',
      },
      focus: color.highlightHover,
      placeholder: '#AAAAAA',
      selected: 'brand',
      text: {
        dark: '#f8f8f8',
        light: '##f8f8f8',
      },
      white: '#FFFFFF',
      'accent-1': color.highlightHover,
      'accent-2': '#FD6FFF',
      'accent-3': '#81FCED',
      'accent-4': color.highlight,
      'dark-1': color.primaryBg,
      'dark-2': '#555555',
      'dark-3': '#777777',
      'dark-4': '#999999',
      'dark-5': '#999999',
      'dark-6': '#999999',
      'light-1': '#F8F8F8',
      'light-2': '#F2F2F2',
      'light-3': '#EDEDED',
      'light-4': '#DADADA',
      'light-5': '#DADADA',
      'light-6': '#DADADA',
      'neutral-1': '#00873D',
      'neutral-2': '#3D138D',
      'neutral-3': '#00739D',
      'neutral-4': '#A2423D',
      'status-critical': '#FF4040',
      'status-error': '#FF4040',
      'status-warning': '#FFAA15',
      'status-ok': '#00C781',
      'status-unknown': '#CCCCCC',
      'status-disabled': '#CCCCCC',
      'primary-bg': color.primaryBg,
      'secondary-bg': color.secondaryBg,
      'secondary-hover': color.secondaryHover,
      highlight: color.highlight,
      'highlight-hover': color.highlightHover,
      'light-blue': color.lightBlue,
      red: color.red,
      'disabled-text': color.disabledText,
      'button-primary': color.buttonPrimary,
      'button-hover': color.buttonHover,
      'ghost-white': color.ghostWhite,
      'hr-orange': color.hrOrange,
      'disabled-background': color.disabledBackground,
    },
    animation: {
      duration: '1s',
      jiggle: {
        duration: '0.1s',
      },
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
      medium: '4px',
      large: '12px',
      xlarge: '24px',
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: '1px',
          small: '2px',
          medium: '4px',
          large: '6px',
          xlarge: '12px',
        },
        edgeSize: {
          none: '0px',
          hair: '1px',
          xxsmall: '2px',
          xsmall: '3px',
          small: '6px',
          medium: '12px',
          large: '24px',
          xlarge: '48px',
        },
        size: {
          xxsmall: '24px',
          xsmall: '48px',
          small: '96px',
          medium: '192px',
          large: '384px',
          xlarge: '768px',
          full: '100%',
        },
      },
      medium: {
        value: 1536,
      },
      large: {},
    },
    deviceBreakpoints: {
      phone: 'small',
      tablet: 'medium',
      computer: 'large',
    },
    control: {
      border: {
        width: '1px',
        radius: '4px',
        color: 'border',
      },
    },
    debounceDelay: 300,
    drop: {
      background: '#ffffff',
      border: {
        width: '0px',
        radius: '0px',
      },
      shadowSize: 'small',
      zIndex: '20',
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      xxsmall: '3px',
      xsmall: '6px',
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
      responsiveBreakpoint: 'small',
    },
    elevation: {
      light: {
        none: 'none',
        xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
        small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
        medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
        large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
        xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
      },
      dark: {
        none: 'none',
        xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
        small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
        medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
        large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
        xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
      },
    },
    focus: {
      border: {
        color: 'focus',
      },
    },
    font: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    hover: {
      background: {
        dark: {
          color: 'active',
          opacity: 'medium',
        },
        light: {
          color: 'active',
          opacity: 'medium',
        },
      },
      color: {
        dark: 'white',
        light: 'black',
      },
    },
    input: {
      padding: '12px',
      weight: 600,
    },
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1,
    },
    selected: {
      background: 'selected',
      color: 'white',
    },
    size: {
      xxsmall: '48px',
      xsmall: '96px',
      small: '192px',
      medium: '384px',
      large: '768px',
      xlarge: '1152px',
      xxlarge: '1536px',
      full: '100%',
    },
  },
  icon: {
    size: {
      small: '12px',
      medium: '24px',
      large: '48px',
      xlarge: '96px',
    },
  },
  accordion: {
    icons: {},
  },
  anchor: {
    textDecoration: 'none',
    fontWeight: 600,
    color: {
      dark: 'accent-1',
      light: 'brand',
    },
    hover: {
      textDecoration: 'underline',
    },
  },
  box: {
    responsiveBreakpoint: 'small',
  },
  button: {
    border: {
      width: '2px',
      radius: '18px',
    },
    primary: {
      color: color.buttonPrimary,
    },
    disabled: {
      opacity: 0.3,
    },

    minWidth: '96px',
    maxWidth: '384px',
    padding: {
      vertical: '4px',
      horizontal: '22px',
    },
  },
  chart: {},
  checkBox: {
    border: {
      color: {
        dark: 'rgba(255, 255, 255, 0.5)',
        light: 'rgba(0, 0, 0, 0.15)',
      },
      width: '2px',
    },
    check: {
      radius: '4px',
      thickness: '4px',
    },
    icon: {},
    icons: {},
    hover: {
      border: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    size: '24px',
    toggle: {
      color: {
        dark: '#d9d9d9',
        light: '#d9d9d9',
      },
      radius: '24px',
      size: '48px',
      knob: {},
    },
  },

  collapsible: {
    minSpeed: 200,
    baseline: 500,
  },
  dataTable: {
    header: {},
    groupHeader: {
      border: {
        side: 'bottom',
        size: 'xsmall',
      },
      fill: 'vertical',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
      background: {
        dark: 'dark-2',
        light: 'light-2',
      },
    },
    icons: {},
    resize: {
      border: {
        side: 'right',
        color: 'border',
      },
    },
    primary: {
      weight: 'bold',
    },
  },
  diagram: {
    line: {
      color: 'accent-1',
    },
  },
  formField: {
    border: {
      color: 'border',
      position: 'inner',
      side: 'bottom',
      error: {
        color: {
          dark: 'white',
          light: 'status-critical',
        },
      },
    },
    content: {
      pad: {
        horizontal: 'small',
        bottom: 'small',
      },
    },
    error: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
      color: {
        dark: 'status-critical',
        light: 'status-critical',
      },
    },
    help: {
      margin: {
        left: 'small',
      },
      color: {
        dark: 'dark-3',
        light: 'dark-3',
      },
    },
    label: {
      margin: {
        vertical: 'xsmall',
        horizontal: 'small',
      },
    },
    margin: {
      bottom: 'small',
    },
  },
  grommet: {},
  heading: {
    font: {},
    level: {
      '1': {
        font: {},
        small: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        medium: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        large: {
          size: '82px',
          height: '88px',
          maxWidth: '1968px',
        },
        xlarge: {
          size: '114px',
          height: '120px',
          maxWidth: '2736px',
        },
      },
      '2': {
        font: {},
        small: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        medium: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        large: {
          size: '50px',
          height: '56px',
          maxWidth: '1200px',
        },
        xlarge: {
          size: '66px',
          height: '72px',
          maxWidth: '1584px',
        },
      },
      '3': {
        font: {},
        small: {
          size: '22px',
          height: '28px',
          maxWidth: '528px',
        },
        medium: {
          size: '26px',
          height: '32px',
          maxWidth: '624px',
        },
        large: {
          size: '34px',
          height: '40px',
          maxWidth: '816px',
        },
        xlarge: {
          size: '42px',
          height: '48px',
          maxWidth: '1008px',
        },
      },
      '4': {
        font: {},
        small: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        medium: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        large: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
        xlarge: {
          size: '18px',
          height: '24px',
          maxWidth: '432px',
        },
      },
      '5': {
        font: {},
        small: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        medium: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        large: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
        xlarge: {
          size: '16px',
          height: '22px',
          maxWidth: '384px',
        },
      },
      '6': {
        font: {},
        small: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        medium: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        large: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
        xlarge: {
          size: '14px',
          height: '20px',
          maxWidth: '336px',
        },
      },
    },
    responsiveBreakpoint: 'small',
    weight: 600,
  },
  layer: {
    background: 'white',
    border: {
      radius: '4px',
    },
    container: {
      zIndex: '15',
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)',
    },
    responsiveBreakpoint: 'small',
    zIndex: '10',
  },
  menu: {
    icons: {},
  },
  meter: {
    color: 'accent-1',
  },
  paragraph: {
    small: {
      size: '14px',
      height: '20px',
      maxWidth: '336px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '528px',
    },
    xlarge: {
      size: '26px',
      height: '32px',
      maxWidth: '624px',
    },
    xxlarge: {
      size: '34px',
      height: '40px',
      maxWidth: '816px',
    },
  },
  select: {
    container: {},
    control: {},
    icons: {},
    options: {
      box: {
        align: 'start',
        pad: 'small',
      },
      text: {
        margin: 'none',
      },
    },
    step: 20,
  },
  tab: {
    active: {
      color: {
        dark: 'light-1',
      },
      background: {
        color: 'disabled-background',
      },
      border: {
        side: 'vertical',
        color: {
          dark: 'primary-bg',
        },
      },
    },
    border: {
      side: 'bottom',
      size: 'small',
      color: {
        dark: 'accent-1',
        light: 'brand',
      },
      active: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
      hover: {
        color: {
          dark: 'white',
          light: 'black',
        },
      },
    },
    color: 'control',
    hover: {
      color: {
        dark: 'white',
        light: 'black',
      },
    },
    margin: {
      vertical: 'xxsmall',
      horizontal: 'large',
    },
    pad: {
      bottom: 'xsmall',
    },
  },
  tabs: {
    header: {
      background: color.secondaryBg,
      extend: `height: 60px;`,
    },
    panel: {},
  },
  table: {
    header: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
      border: 'bottom',
      verticalAlign: 'bottom',
      fill: 'vertical',
    },
    body: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
    },
    footer: {
      align: 'start',
      pad: {
        horizontal: 'small',
        vertical: 'xsmall',
      },
      border: 'top',
      verticalAlign: 'top',
      fill: 'vertical',
    },
  },
  text: {
    xsmall: {
      size: '12px',
      height: '18px',
      maxWidth: '288px',
    },
    small: {
      size: '14px',
      height: '20px',
      maxWidth: '336px',
    },
    medium: {
      size: '18px',
      height: '24px',
      maxWidth: '432px',
    },
    large: {
      size: '22px',
      height: '28px',
      maxWidth: '528px',
    },
    xlarge: {
      size: '26px',
      height: '32px',
      maxWidth: '624px',
    },
    xxlarge: {
      size: '34px',
      height: '40px',
      maxWidth: '816px',
    },
  },
  video: {
    captions: {
      background: 'rgba(0, 0, 0, 0.7)',
    },
    icons: {},
    scrubber: {
      color: 'light-4',
    },
  },
  worldMap: {
    color: 'light-3',
    continent: {
      active: '8px',
      base: '6px',
    },
    hover: {
      color: 'light-4',
    },
    place: {
      active: '20px',
      base: '8px',
    },
  },
}

export default grommetTheme
