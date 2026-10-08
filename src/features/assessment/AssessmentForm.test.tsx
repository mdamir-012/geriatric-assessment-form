import { render, screen, userEvent, waitFor } from '@test-utils';
import { vi } from 'vitest';
import { AssessmentForm } from './AssessmentForm';
import { sampleAssessment } from './fixture';

describe('AssessmentForm', () => {
  it('loads and submits the sample patient with parsed values', async () => {
    const user = userEvent.setup();
    const onSave = vi.fn();

    render(<AssessmentForm onSave={onSave} />);

    await user.click(screen.getByRole('button', { name: 'Load sample patient' }));
    await user.click(screen.getByRole('button', { name: 'Save assessment' }));

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith(sampleAssessment);
    });
    expect(screen.getByRole('alert')).toHaveTextContent('Assessment saved');
  });
});
