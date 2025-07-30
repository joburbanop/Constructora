// Utilidades de validación

// Validar email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar teléfono
export const isValidPhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Validar URL
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Validar que no esté vacío
export const isNotEmpty = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Validar longitud mínima
export const hasMinLength = (value, minLength) => {
  return value && value.toString().length >= minLength;
};

// Validar longitud máxima
export const hasMaxLength = (value, maxLength) => {
  return value && value.toString().length <= maxLength;
};

// Validar rango numérico
export const isInRange = (value, min, max) => {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
};

// Validar que sea un número
export const isNumber = (value) => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};

// Validar que sea un entero positivo
export const isPositiveInteger = (value) => {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
};

// Validar formato de fecha
export const isValidDate = (date) => {
  const d = new Date(date);
  return d instanceof Date && !isNaN(d);
};

// Validar que la fecha sea futura
export const isFutureDate = (date) => {
  const d = new Date(date);
  const now = new Date();
  return d > now;
};

// Validar que la fecha sea pasada
export const isPastDate = (date) => {
  const d = new Date(date);
  const now = new Date();
  return d < now;
};

// Validar formato de imagen
export const isValidImageFormat = (filename) => {
  const validFormats = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return validFormats.includes(extension);
};

// Validar tamaño de archivo (en MB)
export const isValidFileSize = (file, maxSizeMB) => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file && file.size <= maxSizeBytes;
};

// Validar que sea un objeto
export const isObject = (value) => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

// Validar que sea un array
export const isArray = (value) => {
  return Array.isArray(value);
};

// Validar que sea una función
export const isFunction = (value) => {
  return typeof value === 'function';
};

// Validar que sea un string
export const isString = (value) => {
  return typeof value === 'string';
};

// Validar que sea un boolean
export const isBoolean = (value) => {
  return typeof value === 'boolean';
};

// Validar props de componentes
export const validateComponentProps = (props, requiredProps = [], propTypes = {}) => {
  const errors = [];

  // Validar props requeridas
  requiredProps.forEach(prop => {
    if (!props.hasOwnProperty(prop) || props[prop] === undefined) {
      errors.push(`Prop '${prop}' is required`);
    }
  });

  // Validar tipos de props
  Object.keys(propTypes).forEach(prop => {
    if (props.hasOwnProperty(prop) && props[prop] !== undefined) {
      const validator = propTypes[prop];
      if (!validator(props[prop])) {
        errors.push(`Prop '${prop}' has invalid type or value`);
      }
    }
  });

  return errors;
};

// Validar formulario completo
export const validateForm = (formData, validationRules) => {
  const errors = {};

  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const rules = validationRules[field];
    const fieldErrors = [];

    rules.forEach(rule => {
      const { validator, message, params = [] } = rule;
      
      if (!validator(value, ...params)) {
        fieldErrors.push(message);
      }
    });

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Ejemplo de uso de validación de formulario
export const contactFormValidation = {
  name: [
    { validator: isNotEmpty, message: 'El nombre es requerido' },
    { validator: hasMinLength, params: [2], message: 'El nombre debe tener al menos 2 caracteres' },
    { validator: hasMaxLength, params: [50], message: 'El nombre no puede exceder 50 caracteres' }
  ],
  email: [
    { validator: isNotEmpty, message: 'El email es requerido' },
    { validator: isValidEmail, message: 'El email no tiene un formato válido' }
  ],
  phone: [
    { validator: isNotEmpty, message: 'El teléfono es requerido' },
    { validator: isValidPhone, message: 'El teléfono no tiene un formato válido' }
  ],
  message: [
    { validator: isNotEmpty, message: 'El mensaje es requerido' },
    { validator: hasMinLength, params: [10], message: 'El mensaje debe tener al menos 10 caracteres' },
    { validator: hasMaxLength, params: [500], message: 'El mensaje no puede exceder 500 caracteres' }
  ]
}; 