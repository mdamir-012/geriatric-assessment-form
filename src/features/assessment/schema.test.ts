import { sampleAssessment } from './fixture';
import { assessmentSchema } from './schema';

describe('assessmentSchema age boundary', () => {
  it('accepts a patient who turns 60 on the assessment date', () => {
    const result = assessmentSchema.safeParse({
      ...sampleAssessment,
      dateOfBirth: '1966-08-07',
    });

    expect(result.success).toBe(true);
  });

  it('rejects a patient who is one day short of 60', () => {
    const result = assessmentSchema.safeParse({
      ...sampleAssessment,
      dateOfBirth: '1966-08-08',
    });

    expect(result.success).toBe(false);
    const issues = result.success ? [] : result.error.issues;
    expect(issues).toContainEqual(
      expect.objectContaining({
        path: ['dateOfBirth'],
        message: 'This pathway is for patients aged 60 and over',
      })
    );
  });
});
