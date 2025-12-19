// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (basic)
const PHONE_REGEX = /^[\d\s\-\+\(\)]+$/;

export function validateEmail(email: string): { valid: boolean; error?: string } {
  if (!email) {
    return { valid: false, error: 'Email is required' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  return { valid: true };
}

export function validatePhone(phone: string): { valid: boolean; error?: string } {
  if (!phone) {
    return { valid: true }; // Phone is optional
  }
  if (phone.length < 10) {
    return { valid: false, error: 'Please enter a valid phone number' };
  }
  return { valid: true };
}

export function validateName(name: string): { valid: boolean; error?: string } {
  if (!name) {
    return { valid: false, error: 'Name is required' };
  }
  if (name.trim().length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }
  return { valid: true };
}

export function validateDescription(description: string): { valid: boolean; error?: string } {
  if (!description) {
    return { valid: false, error: 'Project description is required' };
  }
  if (description.trim().length < 10) {
    return { valid: false, error: 'Description must be at least 10 characters' };
  }
  return { valid: true };
}

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .trim();
}

export function validateFormData(data: Record<string, string>) {
  const errors: Record<string, string> = {};

  // Validate name
  const nameValidation = validateName(data.Name);
  if (!nameValidation.valid) {
    errors.Name = nameValidation.error || '';
  }

  // Validate email
  const emailValidation = validateEmail(data.Email);
  if (!emailValidation.valid) {
    errors.Email = emailValidation.error || '';
  }

  // Validate phone if provided
  if (data.Phone) {
    const phoneValidation = validatePhone(data.Phone);
    if (!phoneValidation.valid) {
      errors.Phone = phoneValidation.error || '';
    }
  }

  // Validate description
  const descriptionValidation = validateDescription(data.Description);
  if (!descriptionValidation.valid) {
    errors.Description = descriptionValidation.error || '';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
