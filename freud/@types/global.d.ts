declare namespace google {
  type Initialize = (props: {
    client_id: string;
    callback: (result) => void;
  }) => void;

  type RenderButton = (
    el: HTMLElement,
    props: {
      theme: 'outline';
      size: 'large';
    }
  ) => void;

  declare namespace accounts {
    declare namespace id {
      const initialize: Initialize;
      const renderButton: RenderButton;
    }
  }
}
