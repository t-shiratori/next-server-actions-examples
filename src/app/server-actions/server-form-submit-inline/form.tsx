import { InputText } from '@/components/form/InputText';
import { SubmitButton } from '@/components/form/SubmitButton';
import { showCookie } from '@/utils/showCookie';

export const Form = () => {
  async function createInvoice(formData: FormData) {
    /** インラインで書けるのはサーバーコンポーネントの場合のみ */
    'use server';

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };

    console.log('createInvoice: ', { rawFormData });

    showCookie();

    // mutate data
    // revalidate cache
  }

  return (
    <form action={createInvoice}>
      <InputText name="customerId" />
      <InputText name="amount" />
      <InputText name="status" />
      <SubmitButton label="送信" />
    </form>
  );
};
