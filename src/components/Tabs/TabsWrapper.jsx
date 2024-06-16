import TabsHeader from './TabsHeader';
import TabsBody from './TabsBody';

export default function TabsWrapper({ title, children }) {
  return (
    <section id="examples">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

TabsWrapper.TabsHeader = TabsHeader;
TabsWrapper.TabsBody = TabsBody;
